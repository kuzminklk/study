import http from "http";
import path from "path";
import fs from "fs";
import busboyModule from "busboy";

import saveImage from "./save-image.js";

const preprocessOptions = {
    resize: {
        enable: true,
        width: 2,
    },
};

const encodeOptions = {
    mozjpeg: {},
};

http.createServer(function (req, res) {
    if (req.method === "POST") {
        const busboy = busboyModule({ headers: req.headers });

        busboy.on("file", async (fieldName, file, info) => {
            const { filename } = info;
            const fName = filename.split(".")[0];

            const saveTempTo = path.join(
                process.cwd(),
                path.basename(filename)
            );
            const saveResultTo = path.join(
                process.cwd(),
                path.basename(`${fName}.jpg`)
            );

            await new Promise((resolve, reject) => {
                const stream = file.pipe(fs.createWriteStream(saveTempTo));
                stream.on("finish", resolve);
                stream.on("error", reject);
            });

            await saveImage(
                saveTempTo,
                saveResultTo,
                preprocessOptions,
                encodeOptions
            );
        });

        busboy.on("finish", () => {
            res.end("Картинка обработана!");
        });

        return req.pipe(busboy);
    } else if (req.method === "GET") {
        const imageFileName = req.url.replace(/^\//, "");
        const data = fs.readFileSync(imageFileName);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write('<html><body><img src="data:image/jpeg;base64,');
        res.write(Buffer.from(data).toString("base64"));
        res.end('"/></body></html>');
        return;
    }
    res.writeHead(404).end();
}).listen(8000, () => {
    console.log("Server is running");
});
