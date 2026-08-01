import { supabase } from "../services/supabase.js";

export async function getPage(req,res){

    const { bookId,page } = req.params;

    const path =
    `${bookId}/${String(page).padStart(4,"0")}.webp`;

    const { data,error } =
    await supabase.storage
    .from("book-pages")
    .createSignedUrl(path,60);

    if(error){

        return res.status(404).json({

            success:false,

            message:"Halaman tidak ditemukan"

        });

    }

    res.json({

        success:true,

        url:data.signedUrl

    });

}
