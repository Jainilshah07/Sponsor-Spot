const express = require("express");
const connectToMongo = require("./services/Database");
const cors = require("cors");
const bodyParser = require("body-parser")
port = 8000

const app = express();

connectToMongo();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json());

// app.use(require("./Routes/Payment"))

app.use("/api/CreateCompany", require("./routes/Company"))

app.use("/api/GetCompany", require("./routes/Company"))

app.use("/api/GetSponsor", require("./routes/GetSponsor"))

// app.use("/api/TotalBooking", require("./Routes/TotalBooking"))

// app.use("/api/TotalPayment", require("./Routes/TotalPayment"))

// app.use("/api/TotalSite", require("./Routes/TotalSite"))

// app.use("/api/TotalSiteUpdated", require("./Routes/TotalSiteUpdated"))


// app.post("/UserProfile", (req, res) => {
//     console.log(req.body);
// })


app.listen(8000, () => {
    console.log("Listening on port 8000");
})