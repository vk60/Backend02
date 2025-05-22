import { v2 } from "cloudinary";
import fs from 'fs'
const uploadCloudinary=async(localFilepath)=>{
    try {
        if(!localFilepath)  return null;
         //upload the file cloudnary
          const response=await v2.uploader.upload('localFilepath',{resource_type:"auto"})
        // file has been uploaded sucessfully
        console.log("file has been uploaded sucessfully",response.url)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilepath) // remove the locally file ssaed as opertaion get failed for cleaning purpose
    }
}
cloudinary.config({ 
    cloud_name:process.env.CLOUDANIRY_CLOUD_NAME  , 
    api_key: process.env.CLOUDANIRY_API_KEY , 
    api_secret: process.env.CLOUDANIRY_SECRET_KEY
  });

   export {uploadCloudinary}