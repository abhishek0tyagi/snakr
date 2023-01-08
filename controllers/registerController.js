const otpModel = require("../models/otpModel");
const profile =require('../models/profileModel')
const fetch = require('node-fetch');

const getOtp = async function (req, res) {
  const { phone } = req.body;
  var name="snackr";
   var duration="1 hour";
  var OTP = Math.floor(1000 + Math.random() * 9000);
  // var msg =`Dear ${name} Thank you for registring with Edumarc Technologies. Your login details will be shared with you on mail`;
  // var msg=`Welcome to ${name}, Your verification code is : ${OTP}. Code is Valid for ${duration}`
  // var api="https://smsapi.edumarcsms.com/api/v1/sendsms?apikey=cjlpehwde000ugdquxea8ta5u&senderId=EDUMRC&message="+msg+"&number="+phone+"&templateId=1707165123315578459"

// const options = {method: 'GET'};  
// fetch(api, options)
// .then(res => res.json())
// .then(async json => 
//   {
//     const user = await otpModel.create({ phone: phone, otp:OTP });
//     console.log(json)
//     res.status(200).json({ status: json.success});
//  });
 
res.send({
  status:true,
  message:OTP
})

};


const verifyOtp = async function (req, res) {
  try {
    const { phone, otp } = req.body;
    // console.log('phone: ', phone);
    // console.log("otp: ", otp);
    const getuserData = await otpModel.findOne({ phone });
    // console.log('getuserData: ', getuserData);
    // console.log("getuserData.otp: ", getuserData.otp);
    if(getuserData)
    {
    if (otp == getuserData.otp) {
      // console.log("Your are authorize to login!!!");
      res.status(200).json({status:true, message: "Your are authorize to login!!!"})
    } else {
      res.status(403).json({status: false, message: "You are not authorized!!!"});
    }
  }
  else{
    res.status(403).json({status: false, message: "You are not authorized!!!"});
  }
  } catch (error) {
    res.status(403).json({status: false, message: {error}});
  }
};

const createProfile=async function(req,res)
{
  try{
    const {user_id,name,officeName,floor,buildingName,area,email}=req.body
    var data =await profile.create({user_id,name,officeName,floor,buildingName,area,email})
    res.send({
     status:true,
     message:data
    })
  }
  catch(error)
  {
    res.send({
      status:false,
      message:error
    })
  }
 
 

}

module.exports = { getOtp, verifyOtp,createProfile };
