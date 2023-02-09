const express = require("express");
const router = express.Router();

require("../services/Database");

const Company = require("../models/Company");


router.post("/CreateCompany", async (req, res) => {
    const { CompanyName, Password, Email, MobileNo, Founded, Industry } = req.body;


    let num = await Company.findOne({ Email: req.body.Email });
    if (num) {
        return res.status(400).json({ error: "Sorry already registered" })
    }
    try {
        num = Company.create({
            CompanyName, Password, Email, MobileNo, Founded, Industry
        });
        res.status(200).send("Company Edited")
    } catch (error) {
        res.status(500).send("Error")
    }
});

router.get("/GetCompany", async (req, res) => {
    try {
        const ans = await Company.find();
        res.status(200).json(ans)

    } catch (e) {
        console.error(e.message);
        res.status(404).json({ message: e.message });
    }
})

module.exports = router;