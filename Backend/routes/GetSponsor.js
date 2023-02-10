const express = require("express");
const router = express.Router();

require("../services/Database");

const GetSponer = require("../models/GetSponser");


router.post("/GetSponsor", async (req, res) => {


    try {
        const { EventStartDate, EventEndDate, EventTitle, EventDesc, Deliverables, ExpectedAmount } = req.body;

        let num = await GetSponer.create({
            EventStartDate, EventEndDate, EventTitle, EventDesc, Deliverables, ExpectedAmount
        });
        res.status(200).json(num)
    } catch (error) {
        res.status(500).send("Error")
    }
});

router.get("/GetSponserDetails", async (req, res) => {
    try {
        const { EventStartDate, EventEndDate, EventTitle, EventDesc, Deliverables, ExpectedAmount } = req.body;
        const ans = await GetSponer.find();
        res.status(200).json(ans)

    } catch (e) {
        console.error(e.message);
        res.status(404).json({ message: e.message });
    }
})




module.exports = router;