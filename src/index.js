// require('dotenv').config({path: './env'})
import mongoose from 'mongoose'
import {DB_NAME} from './constants.js'
import connectDB from './db/dbConnection.js'
import dotenv from "dotenv"
import express from 'express';

const app = express()

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running on port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log('mongodb connection failed!!!',error)
    process.exit(1)
})







 


//  import express from 'express'

//  const app = express() 

//  (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("error:",error);
//             throw error
//         })
//          app.listen(process.env.PORT,()=>{
//             console.log(`App is running on port ${process.env.PORT}`)
//          })
//     } catch (error) {
//         console.log("error:",error)
//         throw err
//     }
//  })()