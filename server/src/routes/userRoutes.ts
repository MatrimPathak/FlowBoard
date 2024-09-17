import { Router } from "express";
import { getUsers, postUSer } from "../controllers/userController";

const router = Router();

router.get("/", getUsers);
router.post("/", postUSer);

export default router;
