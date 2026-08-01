import express from "express";
import multer from "multer";

import { adminAuth } from "../middleware/adminAuth.js";

const router = express.Router();

const upload = multer({

    storage: multer.memoryStorage(),

    limits: {

        fileSize: 100 * 1024 * 1024

    }

});

router.post(

    "/book",

    adminAuth,

    upload.single("pdf"),

    async (req, res) => {

        if (!req.file) {

            return res.status(400).json({

                success: false,

                message: "PDF belum dipilih"

            });

        }

        res.json({

            success: true,

            message: "PDF diterima server",

            file: req.file.originalname,

            size: req.file.size

        });

    }

);

export default router;
