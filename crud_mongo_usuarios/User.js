import mongoose from "mongoose";

const UserSchema = new mongoose.Schema (
    {
        name: String,
        email: String,
        phone: Number,
        keyword: Number,
        age: Number
    },
    {
        collection: "users"
    }
)

export default mongoose.model("User", UserSchema)