 import {asyncHandler} from '../utils/asyncHandler.js'
 import {ApiError} from '../utils/ApiError.js'
 import User from '../models/user.models.js'
 import uploadCloudinary from '../utils/cloudinary.js'
 const registerUser=asyncHandler(async(req,res)=>{
   // get user details from frontend
   // validation on user data -not empty
   // check if user already exists
   // check for images,check for avatar
   // upload them to cloudinary
   // create user object-create entry in db
   // remove password and refresh token field from response
   // check for user creation
   // return response

   const {fullName,email,username,password}=req.body
   console.log(req.body);
    if([fullName,email,username,password].some ((field)=>field?.trim()=== "")){

        throw new ApiError(400,"All fields are required")
    }
    // to check the user exist or not
    const existedUser=User.findOne({
        $or:[{username},{email}]
    })
    if(existedUser){
        throw new  ApiError(409,"user with emailname existed")
    }
    const avatarLocalpath=req.files?.avatar[0]?.path;
    const coverImagePath=req.files?.coverImage[0]?.path;
    if(!avatarLocalpath){
        throw new ApiError(400,"Avatar image is required")
    }
     const avatar=await uploadCloudinary(avatarLocalpath)
})


export {registerUser}
 