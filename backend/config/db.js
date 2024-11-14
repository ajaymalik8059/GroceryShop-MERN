import mongoose from 'mongoose'

export const connectDB=async()=>{
     await mongoose.connect('mongodb+srv://ajaymalik10821:ajay123@cluster0.9ab3u.mongodb.net/ajay-ecom').then(()=>console.log("DB connected"));
}
