const mongoose = require("mongoose");

const BeSponsorSchema = new mongoose.Schema({

    CompanyName:{
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },
    SponserType: {
        type: String, //Food,drinks,etc
    },
    SponserCategory: {
        type: String, //title,assosciate
        required: true
    },
    PastCount: {
        type: Number, //history - 2 
        required: true
    },
    Deliverables: {
        type: String,
        required: true
    }

});


const BeSponsor = mongoose.model("BeSponsor", BeSponsorSchema)

module.exports = BeSponsor;