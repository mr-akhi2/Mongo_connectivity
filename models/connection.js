require('dotenv').config()
const mongoose=require('mongoose');
mongoose.connect(process.env.Api).then((res)=>{
    console.log('data succesfully connect!')
}).catch((e)=>{
    console.log("data connect failed",e)
});