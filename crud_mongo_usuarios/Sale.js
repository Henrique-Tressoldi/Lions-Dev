import mongoose from "mongoose";


const SaleSchema = new mongoose.Schema (
    {

        idUser: String,
        idCar: String,
        salePrice: Number,
        paymentMethod: String,
        saleDate: String,
        stats: String
        
    },
    {
        collection: "sales"
    }
)

export default mongoose.model("Sale", SaleSchema)