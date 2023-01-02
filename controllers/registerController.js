const otpModel = require("../models/otpModel");

const getOtp = async function (req, res) {
  const { phone } = req.body;
  var OTP = Math.floor(1000 + Math.random() * 9000);
  const user = await otpModel.create({ phone: phone, otp:OTP });
  res.status(200).json({ status: true, body: user });
};


const verifyOtp = async function (req, res) {
  try {
    const { phone, otp } = req.body;
    console.log('phone: ', phone);
    console.log("otp: ", otp);
    const getuserData = await otpModel.findOne({ phone });
    console.log('getuserData: ', getuserData);
    console.log("getuserData.otp: ", getuserData.otp);
    if(getuserData)
    {
    if (otp == getuserData.otp) {
      console.log("Your are authorize to login!!!");
      res.status(201).json({status:true, message: "Your are authorize to login!!!"})
    } else {
      console.log("You are not authorized!!!");
      res.status(404).json({status: false, message: "You are not authorized!!!"});
    }
  }
  else{
    res.status(404).json({status: false, message: "You are not authorized!!!"});
  }
  } catch (error) {
    res.status(404).json({status: false, message: {error}});
  }
};

module.exports = { getOtp, verifyOtp };
