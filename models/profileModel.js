const mongoose = require('mongoose');
const schema = mongoose.Schema

const profileSchema = new schema({
user_id:{
    type: String
},
name:{
    type:Number
},
officeName:{
    type:String
},
floor:{
    type:String
},
buildingName:{
    type:String
},
area:{
    type:String
},
email:{
    type:String
}
},{timestamps:true})

const profile = mongoose.model('profile', profileSchema)

module.exports = profile