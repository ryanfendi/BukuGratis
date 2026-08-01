import fs from "fs";

export function removeFolder(folder){

    if(fs.existsSync(folder)){

        fs.rmSync(folder,{
            recursive:true,
            force:true
        });

    }

}
