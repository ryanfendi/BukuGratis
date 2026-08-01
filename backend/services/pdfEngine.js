import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { promisify } from "util";

const run = promisify(exec);

export async function convertPdf(pdfPath, outputDir) {

    if (!fs.existsSync(outputDir)) {

        fs.mkdirSync(outputDir, {
            recursive: true
        });

    }

    const command =
        `pdftoppm -png "${pdfPath}" "${path.join(outputDir,"page")}"`;

    await run(command);

    return fs.readdirSync(outputDir)
        .filter(file => file.endsWith(".png"))
        .sort();

}
