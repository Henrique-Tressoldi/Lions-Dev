import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Car from "./Car.js"
import User from "./User.js"

dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.json());

const conectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado com o MongoDB")

    } catch (error) {

        console.log("Erro: ", error)

    }
}

conectDB();

app.post("/cars", async (req, res) => {
    try {
        const novoCarro = await Car.create(req.body);
        res.json(novoCarro);
    } catch (error) {
        res.json({ error: error.message })
    }
})

app.post("/users", async (req, res) => {
    try{

        const novoUsuario = await User.create(req.body);
        res.json(novoUsuario);

    } catch (error){
        res.json({error: error.message})
    }
})



app.get("/cars", async (req, res) => {
    try {

        const carros = await Car.find();
        res.json(carros);

    } catch (error) {

        res.json({ error: error.message })

    }
})


app.get("/users", async (req, res) => {
    try {

        const usuarios = await User.find();
        res.json(usuarios);

    } catch (error) {

        res.json({ error: error.message })

    }
})

app.put("/cars/:id", async (req, res) => {

    try {

        const carroAtualizado = await Car.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.json(carroAtualizado)
    } catch (error) {

        res.json({ error: error.message })

    }
})

app.put("/users/:id", async (req, res) => {

    try {

        const usuarioAtualizado = await User.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.json(usuarioAtualizado)
    } catch (error) {

        res.json({ error: error.message })

    }
})

app.delete("/cars/:id", async (req, res) => {

    try {

        const carroDeletado = await Car.findByIdAndDelete(req.params.id);
        res.json(carroDeletado);

    } catch (error) {

        res.json({ error: error.message })

    }


})

app.delete("/users/:id", async (req, res) => {

    try {

        const usuarioDeletado = await User.findByIdAndDelete(req.params.id);
        res.json(usuarioDeletado);

    } catch (error) {

        res.json({ error: error.message })

    }


})

app.get("/cars/brand/:brand", async (req, res) => {
    try {

        const brandSelecionada = await Car.find({
            brand: req.params.brand
        });
        res.json(brandSelecionada);

    } catch (error) {

        res.json({ error: error.message })

    }
})

app.get("/users/email/:email", async (req, res) => {
    try {

        const emailSelecionado = await User.find({
            email: req.params.email
        });
        res.json(emailSelecionado);

    } catch (error) {

        res.json({ error: error.message })

    }
})

app.get("/cars/:id", async (req, res) => {
    try {

        const carroSelecionado = await Car.findById(

            req.params.id
        );
        res.json(carroSelecionado);

    } catch (error) {

        res.json({ error: error.message })

    }
})

app.get("/cars/plate/:plate", async (req, res) => {
    try {

        const carroSelecionado = await Car.findById(

            req.params.plate
        );
        res.json(carroSelecionado);

    } catch (error) {

        res.json({ error: error.message })

    }
})

app.get("/cars/available/count", async (req, res) => {
    try {

        const availableCars = await Car.countDocuments({availability: true})
        res.json({ availableCars });

    } catch (error) {

        res.json({ error: error.message })

    }
})

app.get("/users/count", async (req, res) => {
    try {

        const availableUsers = await User.countDocuments({})
        res.json(availableUsers );

    } catch (error) {

        res.json({ error: error.message })

    }
})

app.get("/cars/available/true", async (req, res) => {
    try {

        const availableCars = await Car.find({
            availability: true
        });
        res.json({ availableCars });

    } catch (error) {

        res.json({ error: error.message })

    }
})

app.get("/users/exists/:email", async (req, res) => {
    try {

        const emailExiste = await User.findOne({email: req.params.email});
        res.json({ exists: !!emailExiste });

    } catch (error) {

        res.json({ error: error.message })

    }
})

app.delete("/users", async (req, res) => {
    try{

        const usuariosDeletado = await User.find()
        res.json({usuariosDeletado})

    } catch (error){
        res.json({error: error.message})
    }
})


app.get("/users/name/:name", async (req, res) => {
    try {

        const usuario = await User.findOne({name: req.params.name});
        res.json({ usuario });

    } catch (error) {

        res.json({ error: error.message })

    }
})

app.get("/cars/price/:min/:max", async (req, res) => {
    try {

        const availableCars = await Car.find({
            price: { $gte: Number(req.params.min), $lte: Number(req.params.max) }
        });
        res.json({ availableCars });

    } catch (error) {

        res.json({ error: error.message })

    }
})



app.patch("/cars/:id/alterAvailability", async (req, res) => {
    try {
        const carroAtualizado = await Car.findByIdAndUpdate(
            req.params.id,
            { availability: req.body.availability },
            { new: true }
        );
        res.json(carroAtualizado);
    } catch (error) {
        res.json({ error: error.message });
    }
});

app.patch("/users/:id/name", async (req, res) => {
    try {
        const userAtualizado = await User.findByIdAndUpdate(
            req.params.id,
            { availability: req.body.availability },
            { new: true }
        );
        res.json(userAtualizado);
    } catch (error) {
        res.json({ error: error.message });
    }
});



app.listen(PORT, () => {
    console.log("O servidor esta rodando na porta: ", PORT);
})