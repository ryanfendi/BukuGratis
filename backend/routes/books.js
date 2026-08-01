import express from "express";

const router = express.Router();

// Semua buku
router.get("/", async (req, res) => {

    res.json({
        success: true,
        books: []
    });

});

// Detail buku
router.get("/:id", async (req, res) => {

    res.json({

        success: true,

        id: req.params.id

    });

});

export default router;
