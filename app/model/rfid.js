import mongoose from "mongoose";

const rfidSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
        }
    },
    {
        timestamp: true
    }
);

const rfidModel = mongoose.model("Rfid", rfidSchema);

export default rfidModel;