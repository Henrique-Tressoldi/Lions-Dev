import { Double } from "mongodb";
import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
    {
        
        model: String,
        brand: String,
        year: Number,
        color: String,
        price: Double,
        availability: Boolean,
        plate: String

    },
    {
        collection: "cars"
    }
)

export default mongoose.model("Car", CarSchema)