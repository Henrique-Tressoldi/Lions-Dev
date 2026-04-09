import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        nome: String,
        email: String,

    },
    {
        collection: "Users"
    }
)

export default mongoose.model("User", UserSchema)