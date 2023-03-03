require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");


// middlewares
app.use(express.json());
app.use(cors());

// db connection
dbConnection(); 


// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// listening server 
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));