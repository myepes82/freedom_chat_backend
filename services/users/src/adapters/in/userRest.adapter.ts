import { Router } from "express";

const router = Router();

router.post("/create", (req, res) => {
    console.log("creating")
})

export default router;