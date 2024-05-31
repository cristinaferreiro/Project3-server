const uploadMiddleware = require("../middleware/uploader.middleware")

const router = require("express").Router()

router.post('/image', uploadMiddleware.single('imageData'), (req, res) => {

    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error caragndo el archivo' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
})



module.exports = router