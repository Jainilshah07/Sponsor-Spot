const mongoose = require('mongoose')



module.exports.dbConnection = async (MONGO_URI) => {
    try {
        await mongoose.connect(MONGO_URI)
        //mongoose.set('strictQuery', false);
        console.log("Connected to mongodb");

    } catch (ex) {
        console.log(ex);
    }
}

    //mongodb://localhost:27017/SponserSpot
