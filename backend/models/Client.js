const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const clientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    projects: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Project'
        }
    ]
}, { timestamps: true });

const Client = model("Client", clientSchema);
module.exports = Client;

