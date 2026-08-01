import { randomUUID } from "crypto";

export function generateFileName(extension) {

    return randomUUID() + "." + extension;

}
