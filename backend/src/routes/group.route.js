import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  addMembers,
  createGroup,
  removeMembers,
  updateGroup,
} from "../controllers/group.controller.js";

const router = express.Router();

router.post("/create", createGroup);
router.put("/:groupId/add", addMembers);
router.put("/:groupId/remove", removeMembers);
router.put("/:groupId/update", updateGroup);

export default router;
