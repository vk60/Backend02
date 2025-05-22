 
import dotenv from 'dotenv'
//import mongoose from 'mongoose'  
import express from 'express'
 import connectDB from './db/index.js';
 import {app} from './app.js'
dotenv.config({
    path:'./env'
})
 



connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server is connected")
    })
}
   
)
.catch((err)=>{
    console.log(err);
})















//  import express from 'express'
//  const app=express();
//  (async()=>{
//      try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        console.log("Databse connected succesfully")
//        app.on("error",(error)=>{
//           console.log(error)
//              throw error
//          })
//       app.listen(process.env.PORT,()=>{
//              console.log("THE message are listen at the port",process.env.PORT)
//          })
//     } catch (error) {
//          console.log(error)
//      }
//  })()