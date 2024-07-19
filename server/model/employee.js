const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const employeeModel = mongoose.model('Employee', employeeSchema);
module.exports = employeeModel;
