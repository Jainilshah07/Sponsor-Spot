const express = require("express");
const router = express.Router();

require("../services/Database");

const BeSponsor = require("../models/BeSponsor");
const companyData = require("../models/Company");


router.post("/BeSponsor", async (req, res) => {
    try {
        const {CompanyName, amount, SponserType, SponserCategory, PastCount, Deliverables } = req.body;
    
        const sponsorship = await BeSponsor.create({
          CompanyName,
          SponserType,
          amount,
          SponserCategory,
          PastCount,
          Deliverables
        });
    
        res.status(200).json(sponsorship)
      } catch (error) {
        res.status(500).send({ error: 'Error adding sponsorship' });
      }
    
});

router.get("/GetAvailableSponsorships", async (req, res) => {
    try {
        const ans = await BeSponsor.find();
        res.status(200).json(ans)

    } catch (e) {
        console.error(e.message);
        res.status(404).json({ message: e.message });
    }
})

module.exports = router;