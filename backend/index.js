const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config();


const port = process.env.PORT || 5000
const url = process.env.MONGO_URL


const app = express();

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

