import express from "express";

const router = express.Router();

router.post("/login", async (req,res)=>{

    res.json({

        success:true,

        message:"Login berhasil"

    });

});

router.post("/register", async (req,res)=>{

    res.json({

        success:true,

        message:"Register berhasil"

    });

});

export default router;
