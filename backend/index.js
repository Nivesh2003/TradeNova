const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const {HoldingsModel} = require('./model/HoldingsModel');
const {PositionModel} = require('./model/PositionModel');
const {OrderModel} = require('./model/OrderModel');
require('dotenv').config();

const port = process.env.PORT || 5000
const url = process.env.MONGO_URL

const app = express();

app.use(cors());
app.use(bodyParser.json());

//API endpoints of positions and holdings
app.get('/allholdings',async (req,res) => {
    let allHoldings = await HoldingsModel.find();
    res.json(allHoldings);
})
app.get('/allPositions',async (req,res) => {
    let allHoldings = await PositionModel.find();
    res.json(allHoldings);
})

//Orders
app.post('/newOrder', async (req,res) => {
    let newOrder = new OrderModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode
    });
    newOrder.save();
    res.send("Order received");
});

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

