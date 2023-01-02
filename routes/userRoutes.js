const express = require('express')
const router = express.Router()

const registerController=require('../controllers/registerController');
router.post('/getOtp', registerController.getOtp)
router.post('/verifyOtp', registerController.verifyOtp)

module.exports = router