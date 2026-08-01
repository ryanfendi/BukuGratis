import fs from "fs";
import path from "path";

import { convertPdf } from "../services/pdfEngine.js";

export async function uploadBook(req,res){

    try{

        const pdf=req.file;

        if(!pdf){

            return res.status(400).json({

                success:false,

                message:"PDF belum dipilih"

            });

        }

        const uploadDir="temp";

        if(!fs.existsSync(uploadDir)){

            fs.mkdirSync(uploadDir);

        }

        const pdfPath=path.join(

            uploadDir,

            pdf.originalname

        );

        fs.writeFileSync(

            pdfPath,

            pdf.buffer

        );

        const pages=await convertPdf(

            pdfPath,

            "temp/pages"

        );

        res.json({

            success:true,

            pages:pages.length

        });

    }

    catch(err){

        res.status(500).json({

            success:false,

            error:err.message

        });

    }

}
