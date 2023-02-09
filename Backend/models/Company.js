// const mongoose = require("mongoose");

// const CompanySchema = new mongoose.Schema(
//     {
//         email: { type: String, required: true },
//         password: { type: String, required: true },
//         companyName: { type: String, required: true },
//         phone: { type: String },
//         founded: { type: String },
//         type: {
//             type: String,
//             enum: ["becomeSponsor", "getSponsorship"],
//         },
//     },
//     // {
//     //     toJSON: {
//     //         transform(doc, ret) {
//     //             delete ret.__v;
//     //             delete ret.createdAt;
//     //             delete ret.updatedAt;
//     //         },
//     //     },
//     //     timestamps: true,
//     // }
// );

// module.exports.Company = mongoose.model("company", CompanySchema);

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

// autoIncrement.initialize(mongoose.connection);
// userData.plugin(autoIncrement.plugin,"")

const companyData = mongoose.model("companyData", CompanyDataSchema)

module.exports = companyData;


