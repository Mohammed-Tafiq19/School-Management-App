const mongoose=require("mongoose")

const dbConnect=async()=>{
    try{
         mongoose.connect("mongodb://127.0.0.1:27017/SchoolManagement")
    }catch(error){
        console.log("Something went wrong");
    }
}


module.exports = dbConnect