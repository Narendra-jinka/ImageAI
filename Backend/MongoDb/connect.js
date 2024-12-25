import mongoose from "mongoose";


const connectDB = async(url) => {
    //console.log("Connecting to MongoDB... :"+ process.env.MONGODB_URL);
    await mongoose.connect(process.env.MONGODB_URL)
       .then(() => console.log("MongoDB Connected..."))
       .catch((err) => console.log(err));
};

export default connectDB;