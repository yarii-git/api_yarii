const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const useRoutes = require("./routes/plant.js")

const app = express()

const port = process.env.PORT || 9000;

// Middleware
app.use(express.json())

// Routes
app.get('/', (request, response) => {
    response.send('<h1>Manual</h1>')
})

// Mount the router for '/api' requests
app.use('/api', useRoutes);

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error(error))

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})