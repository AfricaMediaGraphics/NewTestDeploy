
const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:String, 
    age:Number,
    email:{type:String,required:true},
    createdAt: Date,
    udatedAt:Date,
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address:{
        street:String,
        city:String
}})

module.exports = mongoose.model("User",userSchema)

