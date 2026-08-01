import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {

    res.json({

        success: true,

        message: "Upload berhasil"

    });

});

export default router;
