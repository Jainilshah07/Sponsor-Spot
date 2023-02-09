
const { string } = require("joi");
const mongoose = require("mongoose");
// import autoIncrement from "mongoose-auto-increment"

const GetSponsorSchema = new mongoose.Schema({

    EventStartDate: {
        type: String,
        required: true
    },
    EventEndDate: {
        type: String,
        required: true
    },
    EventTitle: {
        type: String,
        required: true
    },
    EventDesc: {
        type: String,
        required: true
    },
    Deliverables: {
        type: String,
    },
    ExpectedAmount: {
        type: Number,
    }
});

// autoIncrement.initialize(mongoose.connection);
// userData.plugin(autoIncrement.plugin,"")

const GetSponsor = mongoose.model("GetSponsor", GetSponsorSchema)

module.exports = GetSponsor;


