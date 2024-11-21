import mongoose from 'mongoose'

export const connectDB=async()=>{
     await mongoose.connect('mongodb+srv://.net/ajay-ecom').then(()=>console.log("DB connected"));
}
