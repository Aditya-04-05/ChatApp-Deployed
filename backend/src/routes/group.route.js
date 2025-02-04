import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { addMembers, createGroup } from "../controllers/group.controller.js";

const router = express.Router();

router.post("/create", createGroup);
router.put("/:groupId/add", addMembers);

export default router;
