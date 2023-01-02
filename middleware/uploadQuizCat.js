var multer=require('multer');
const AWS =require('aws-sdk') 



  //access key - AKIA5TAQBLHDTC5Y27U6
// secretekey - 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
// var storage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'uploads/')
//     },
//     filename:(req,file,cb)=>{
//         cb(null,Date.now()+'-'+file.originalname)
//     }
// });
// var data=(req,file,cb)=>{
//     cb(null,Date.now()+'-'+file.originalname)
// }
// // console.log("upload:"+JSON.stringify(storage))
// var upload=multer({
//     storage:storage
// });
// const storage = multer.memoryStorage({
//     destination: function (req, file, cb) {
//         cb(null, '')
//     }
// })

const filefilter =function(req, file, cb) {
    console.log("hello")
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
        console.log("in if")
        cb(null, true)
    } else {
        console.log("in else")
        cb(null, false)
    }
}
const storage = multer.memoryStorage();
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     console.log("hello")
//     cb(null, './uploads')
//   },
//   filename: function (req, file, cb) {
//     console.log("hey") 

//     cb(null, file.originalname)
//   }
// })
const upload = multer({ storage: storage})

const s3 = new AWS.S3({
    accessKeyId: "AKIA5TAQBLHDTC5Y27U6",
    secretAccessKey: "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",
  })
module.exports=upload
