import cloudinary from "../lib/cloudinary.js";
import Group from "../models/group.model.js";

export const createGroup = async (req, res) => {
  const { groupName, groupAdmin, groupMembers } = req.body;

  try {
    if (
      !groupName ||
      !groupAdmin ||
      !Array.isArray(groupMembers) ||
      groupMembers.length === 0
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newGroup = new Group({
      groupName,
      groupAdmin,
      groupMembers,
    });

    if (newGroup) {
      await newGroup.save();

      res.status(201).json({
        _id: newGroup._id,
        groupName: newGroup.groupName,
        groupProfilePic: newGroup.groupProfilePic,
      });
    } else {
      res.status(400).json({ message: "Invalid Group data" });
    }
  } catch (error) {
    console.log("Error in createGroup controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const addMembers = async (req, res) => {};

export const removeMembers = async (req, res) => {};

export const updateGroup = async (req, res) => {};
