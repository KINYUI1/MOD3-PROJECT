const express = require('express')
const blogsctrl = require('../../controllers/api/blogs')
const router = express.Router()
const multer = require('multer')
const uploadsMiddleWare = multer({ dest: 'uploads/' })

router.post('/addblog', uploadsMiddleWare.single('image') ,blogsctrl.addblog)

module.exports = router