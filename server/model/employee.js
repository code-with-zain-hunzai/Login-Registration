const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String
})

const employeeModel = mongoose.model("employee",employeeSchema)
module.exports = employeeModel