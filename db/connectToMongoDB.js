import mongoose from "mongoose";
const MONGODB_URI = "mongodb+srv://ganga:ganga333@mern-apps.755m5.mongodb.net/chat-app?retryWrites=true&w=majority&appName=mern-apps"

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