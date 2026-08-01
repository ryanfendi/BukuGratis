import { supabase } from "./supabase.js";

export async function uploadFile(bucket, fileName, buffer, contentType) {

    const { data, error } = await supabase.storage
        .from(bucket)
        .upload(fileName, buffer, {
            contentType,
            upsert: false
        });

    if (error) {

        throw error;

    }

    return data.path;

}
