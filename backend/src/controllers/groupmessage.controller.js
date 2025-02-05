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
