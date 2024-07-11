const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const uuid = require('uuid');

const employeeSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        default: function() {
           
            let uuidString = uuid.v4().replace(/-/g, ''); 
            return 'MW-' + uuidString.substring(0, 8);
        }

    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    projects: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Project'
        }
    ]
}, { timestamps: true });

const Employee = model("Employee", employeeSchema);
module.exports = Employee;
