import Group from "../models/group.model.js";
import GroupMessage from "../models/groupmessage.model.js";

import cloudinary from "../lib/cloudinary.js";

export const getGroupsForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const foundGroups = await Group.find({
      $or: [{ groupMembers: loggedInUserId }, { groupAdmin: loggedInUserId }],
    });
  } catch (error) {
    console.error("Error in getGroupsForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getGroupMessages = async (req, res) => {
  try {
    const { id: groupToChatId } = req.params;

    const messages = await GroupMessage.find({
      groupId: groupToChatId,
    }).sort({ createdAt: 1 });

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getGroupMessages controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const sendGroupMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: groupId } = req.params;
    const senderId = req.user._id;

    let imageUrl;
    if (image) {
      // Upload base64 image to cloudinary
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = new GroupMessage({
      senderId,
      groupId,
      text,
      image: imageUrl,
    });

    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendGroupMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
