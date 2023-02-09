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

router.post("/login", async (req, res) => {
    try {
        const company = await Company.findOne({ Email: req.body.Email });
        if (!company) return res.status(401).send({ error: 'Invalid email or password' });
    
        // const isPasswordMatch = await bcrypt.compare(req.body.password, company.password);
        // if (!isPasswordMatch) return res.status(401).send({ error: 'Invalid email or password' });
    
        // const token = jwt.sign({ id: company._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(200).send("Login Successfull");
      } catch (error) {
        res.status(500).send({ error: 'Error logging in' });
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