const brcypt=require("bcryptjs");
const mongoose=require("mongoose");
const usersSchema= new mongoose.Schema({
   email:
    {
        type:String,
        required:true
    },
    contact:
    {
        type:Number,
        required:true
    },
    password:
    {
        type:String,
        required:true
    }
});
usersSchema.pre("save",async function(next){
    if(this.isModified("password"))
         {
            console.log("password is ${this.password}");
            this.password=await bcrypt.hash(this.password,10);
            console.log("password is ${this.password}");
        }
    next();
})
module.exports=mongoose.model('Users',usersSchema);
