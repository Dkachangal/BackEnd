const express = require('express');
const postModel = require('./modules/post.model');
const multer = require('multer');
const uploadImage  = require('./services/storage.services');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
const uploadImg = multer({storage: multer.memoryStorage()});


// INPUT IMAGE CAPTION & IMAGE FILE
app.post('/create-post', uploadImg.single("image"), async (req, res) => {

    const caption = req.body.caption;
    const img = req.file;
    try {
        const imgRes = await uploadImage(img.buffer, img.originalname);
        // if code comes here, that means imgRes has come
        const post = await postModel.create({
            image: imgRes.url,
            caption: caption
        });
        res.status(200).json({message: "Post created successfully", imageUrl: imgRes.url, caption: caption});
    } catch (error) {
        res.status(500).json({message: "Error in creating post"});
    }
});

app.get('/view-images', async (req, res) => {
    const images = await postModel.find();
    res.send(images);
})


module.exports = app;