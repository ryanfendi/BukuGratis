import express from "express";

import multer from "multer";

import { uploadBook } from "../controllers/uploadController.js";

import { adminAuth } from "../middleware/adminAuth.js";

const router=express.Router();

const upload=multer({

storage:multer.memoryStorage()

});

router.post(

"/book",

adminAuth,

upload.single("pdf"),

uploadBook

);

export default router;
