import mongoose from "mongoose";
import env from '../util/validateEnv'

const DB_URI = env.MONGO_URI

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI); // Database connection 🥳
        console.log("Database Connected 🥳🥳🥳🥳");
    } catch (err) {
        console.log("Could not connect to MongoDB");
        console.log(err);
        process.exit(1);
    }
};

export default connectDB