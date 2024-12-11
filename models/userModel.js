const mongoose =require('mongoose');

 const user=new mongoose.Schema({
    name:String,
    email:String,
    type:String,
    time:String
});
module.exports=mongoose.model('user',user)