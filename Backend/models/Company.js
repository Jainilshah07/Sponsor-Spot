
const mongoose = require("mongoose");
// import autoIncrement from "mongoose-auto-increment"

const CompanyDataSchema = new mongoose.Schema({

    CompanyName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    MobileNo: {
        type: Number,
        required: true
    },
    Founded: {
        type: Number,
        required: true
    },
    Industry: {
        type: String,
        required: true
    }

});


const companyData = mongoose.model("companyData", CompanyDataSchema)

module.exports = companyData;


