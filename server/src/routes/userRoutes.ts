import { Router } from "express";
import { getUser, getUsers, postUSer } from "../controllers/userController";

const router = Router();

router.get("/", getUsers);
router.post("/", postUSer);
router.get("/:cognitoId", getUser);

export default router;
