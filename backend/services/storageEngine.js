import { supabase } from "./supabase.js";
import fs from "fs";
import path from "path";

export async function uploadPages(bookId, folder){

    const files = fs.readdirSync(folder)
        .filter(f => f.endsWith(".webp"))
        .sort();

    const uploaded = [];

    for(let i=0;i<files.length;i++){

        const file = files[i];

        const filePath = path.join(folder,file);

        const buffer = fs.readFileSync(filePath);

        const storagePath =
        `${bookId}/${String(i+1).padStart(4,"0")}.webp`;

        const { error } = await supabase.storage
        .from("book-pages")
        .upload(storagePath,buffer,{

            contentType:"image/webp",

            upsert:true

        });

        if(error){

            throw error;

        }

        uploaded.push(storagePath);

    }

    return uploaded;

}
