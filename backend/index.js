const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const {HoldingsModel} = require('./model/HoldingsModel');
const {PositionModel} = require('./model/PositionModel');
require('dotenv').config();

const port = process.env.PORT || 5000
const url = process.env.MONGO_URL

const app = express();

app.use(cors());
app.use(bodyParser.json());

//API endpoints
app.get('/allholdings',async (req,res) => {
    let allHoldings = await HoldingsModel.find();
    res.json(allHoldings);
})
app.get('/allPositions',async (req,res) => {
    let allHoldings = await PositionModel.find();
    res.json(allHoldings);
})


//server chalra 
app.listen(port, () => {
    console.log(`Server is started at ${port}`);
    
    mongoose.connect(url)
        .then(() => {
            console.log("MongoDB connected 😊");
        })
        .catch((e) => {
            console.log("MongoDB connection error:", e);
        });
});

