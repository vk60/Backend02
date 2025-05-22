 import mongoose from 'mongoose'
 import jwt from "jsonwebtoken"
 import bcrypt from "bcrypt"
 const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
      
    },
  fullName:{
        type:String,
        required:true,
       iundex:true,
       
        trim:true,
         
    },
    avatar:{
        type:String,    //cloudinary url
        required:true,

    },
    coverImage:{
        type:String, 
    },
    watchHistory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Video'
        } 
    ],
    password:{
        type:String,
        required:[true,'Password is required']
    },
    refreshToken:{
        type:String,
    }
 },{timestamps:true})

userSchema.pre("save",async function(next){
   if(!this.isModified("password")){
  return next();
   }
   this.password=bcrypt.hash(this.password,10)
   next()
})
userSchema.methods.isPasswordCorrect=async function(password){
   await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken=function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            fullName:this.fullname,
            username:this.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            axpiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken=function(){
    return jwt.sign(
        {
            _id:this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            axpiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

 export const User=mongoose.model("User",userSchema);