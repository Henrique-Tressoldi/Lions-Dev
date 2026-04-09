import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./User.js"

dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.json());

const conectDB = async() => {
    try {

        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado com o MongoDB")

    } catch (error){

        console.log("Erro: ", error)

    }
}

conectDB();

app.post("/users", async (req, res) => {
    try {
        const novoUsuario = await User.create(req.body);
        res.json(novoUsuario);
    } catch (error) {
        res.json({error: error.message})
    }
})

app.listen(PORT, () => {
    console.log("O servidor esta rodando na porta: ", PORT);
})