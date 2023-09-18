const express = require('express')
const userctrl = require('../../controllers/api/users')
const router = express.Router()
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/',userctrl.create)
router.put('/:id',userctrl.updateUser)
router.post('/login',userctrl.login)
router.delete('/deleteuser/:id',userctrl.deleteuser)
router.get('/check-token', userctrl.checkToken);
router.get('/check-token', ensureLoggedIn, userctrl.checkToken);

module.exports = router