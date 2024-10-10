import mongoose from "mongoose";
const MONGODB_URI = "mongodb://localhost:27017/chat-app"

const connectToMongoDB = async () => {
    try {
        // console.log(process.env.MONGODB_URI)
       await mongoose.connect(MONGODB_URI);
       console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
}

export default connectToMongoDB;