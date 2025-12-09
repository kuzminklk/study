

import { ImagePool } from "@squoosh/lib";
import fs from "fs/promises";
import { cpus } from "os"


async function openImage(path, pool) {
    const file = await fs.readFile(path);
    return pool.ingestImage(file);
}

async function processImage(image, preOpt, encOpt) {
    await image.decoded
    await image.preprocess(preOpt);
    await image.encode(encOpt);
    return image;
}

async function saveIntoJpeg(image, path) {
    const rawEncodedImage = (await image.encodedWith.mozjpeg).binary;
    return fs.writeFile(path, rawEncodedImage);
}

async function saveImage(unprocessedImagePath, processedImagePath, preOpt, encOpt) {
    const imagePool = new ImagePool(cpus.length);
    const image = await openImage(unprocessedImagePath, imagePool);
    const processedImage = await processImage(image, preOpt, encOpt);
    await saveIntoJpeg(processedImage, processedImagePath)
    await imagePool.close();
}

export default saveImage