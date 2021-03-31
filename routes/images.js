const express = require('express');
const imageController = require('../controllers/imageController');
const imageUploader = require('../helpers/image-upload');
const checkAuthMiddleware = require('../middleware/authcheck');
const router = express.Router();

router.post("/upload", checkAuthMiddleware.checkAuth, 
                        imageUploader.upload.single('image'),
                        imageController.upload);

module.exports = router;