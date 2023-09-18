const express = require('express')
const blogsctrl = require('../../controllers/api/blogs')
const router = express.Router()

router.post('/addblog', blogsctrl.addblog)

module.exports = router