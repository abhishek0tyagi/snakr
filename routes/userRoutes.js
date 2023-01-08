const express = require('express')
const router = express.Router()

const registerController=require('../controllers/registerController');

router.post('/getOtp', registerController.getOtp)
router.post('/verifyOtp', registerController.verifyOtp)

router.post('/createProfile',registerController.createProfile)
module.exports = router