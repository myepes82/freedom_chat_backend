import { Router } from "express";
import loginService from "../../core/services/login.service";

const router = Router();

router.post("/login", loginService)

export default router;