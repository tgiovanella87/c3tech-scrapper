import express from "express";
import scrapperController from "../controllers/scrapperController";

const router = express.Router();

router.post("/", scrapperController);

export default router;
