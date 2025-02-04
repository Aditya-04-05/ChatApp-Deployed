import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
  {
    groupName: {
      type: String,
      required: true,
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    groupMembers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    groupDescription: {
      type: String,
      default: "",
    },
    groupProfilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Group = mongoose.model("Group", groupSchema);

export default Group;
