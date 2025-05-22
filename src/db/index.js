import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js'




const connectDB=async()=>{
   try {
     const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     console.log(`\n MOngoDb connected!! DB HOST: ${connectionInstance.connection.host} ${process.env.PORT}`)
   } catch (error) {
     console.log(error);
     process.exit(1)
   }
}


export default connectDB;
 