const express = require("express");
const router = express.Router();

require("../services/Database");

const Company = require("../models/Company");

// router.post("/CreateCompany", async (req, res) => {
//     const { email, password, companyName, phone, founded, type } = req.body;

//     // if (!email || !password || !companyName) {
//     //     return res.status(422).json({ error: "Please fill all details" })
//     // }

//     let num = await Company.findOne({ email: req.body.email });
//     if (num) {
//         return res.status(400).json({ error: "Sorry already registered" })
//     }
//     try {
//         num = Company.create({
//             email, password, companyName, phone, founded, type
//         });
//         res.status(200).send("User Edited")
//     } catch (error) {
//         res.status(500).send("Error")
//     }
// });

router.post("/CreateCompany", async (req, res) => {
    const { FirstName, LastName, Email, MobileNo } = req.body;

    if (!FirstName || !LastName || !Email || !MobileNo) {
        return res.status(422).json({ error: "Please fill all details" })
    }

    let num = await Company.findOne({ Email: req.body.Email });
    if (num) {
        return res.status(400).json({ error: "Sorry already registered" })
    }
    try {
        num = Company.create({
            FirstName, LastName, Email, MobileNo
        });
        res.status(200).send("User Edited")
    } catch (error) {
        res.status(500).send("Error")
    }
});

module.exports = router;