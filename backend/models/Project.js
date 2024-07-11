const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    technology: [
        {
            type: String,
            required: true
        }
    ],
    estimatedHour: {
        type: Number,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    status: {
          type: String,
          enum : ["Pending", "Complete"],
          default: "Pending",
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    }
}, { timestamps: true });

const Project = model("Project", projectSchema);
module.exports = Project;
