import sharp from "sharp";
import fs from "fs";
import path from "path";

export async function convertPagesToWebp(inputDir, outputDir){

    if(!fs.existsSync(outputDir)){
        fs.mkdirSync(outputDir,{
            recursive:true
        });
    }

    const files = fs.readdirSync(inputDir);

    const pages=[];

    for(const file of files){

        if(!file.endsWith(".png")) continue;

        const input=path.join(inputDir,file);

        const output=path.join(
            outputDir,
            file.replace(".png",".webp")
        );

        await sharp(input)
        .webp({
            quality:85
        })
        .toFile(output);

        pages.push(output);

    }

    return pages;

}
