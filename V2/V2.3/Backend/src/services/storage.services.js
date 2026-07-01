const imagekit = require('imagekit');
require('dotenv').config();

const imgKit = new imagekit({
    publicKey: "public_xH7T+Kq/bdZ0M60tSGh9IuXfZOo=",
    privateKey: process.env.IMG_KIT_PVT_KEY,
    urlEndpoint: process.env.URI_END_POINT
});

async function uploadImage(fileBuffer, fileName) {
    try {
        const imgResponse = await imgKit.upload({
            file: fileBuffer,
            fileName: fileName
        });
        return imgResponse;
    } catch (err) {
        console.error("Error uploading image:", err);
        return null;
    }
}

module.exports = uploadImage;