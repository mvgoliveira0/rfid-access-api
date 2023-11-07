import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import rfid from "./model/rfid.js";

dotenv.config();

mongoose.connect(process.env.ATLAS_URI);
const app = express();

app.listen(process.env.API_PORT);

app.use(express.json());

app.post('/create', async (req, res) => {
    const data = await rfid.create(req.body);
    return res.json(data);
});

app.get('/check/:code', async (req, res) => {
    try {
        const data = await rfid.findOne({ code: req.params.code });

        if (!data) {
            return res.status(401).json({ message: "code not found" });
        }

        return res.json(data);
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
});

console.log(`🚀✨ App is running at port ${process.env.API_PORT}`)