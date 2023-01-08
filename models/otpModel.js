const mongoose = require('mongoose');
const schema = mongoose.Schema

const otpSchema = new schema({
otp:{
    type: String
},
phone:{
    type:String
}
},{timestamps:true})


const otp = mongoose.model('otp',  otpSchema)

module.exports = otp