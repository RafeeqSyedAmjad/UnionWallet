const express = require("express");
const cors = require("cors");
const { connectToMongoDB } = require("./db"); // Import the database setup function from db.js

const app = express(); // Initialize the express app

app.use(cors())
app.use(express.json());

const mainRouter = require("./routes/index");

app.use("/api/v1", mainRouter);

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectToMongoDB()
    .then(() => {
        console.log("Connected to MongoDB");
        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });


