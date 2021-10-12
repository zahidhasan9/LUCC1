const express = require("express");
const env = require("dotenv");
const app = express();
const path = require("path");
const cors = require("cors");

// Imoprt
const connectDB = require('./config/db');


//routes
const authRoutes = require("./src/routes/auth");
const adminRoutes = require("./src/routes/admin/auth");
const curdRoutes = require("./src/routes/userCurd");
// Config dotenv
require('dotenv').config({
    path: './config/.env'
});



//environment variable or you can say constants
env.config();

// mongodb connection

connectDB();


app.use(cors());
app.use(express.json());
// app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", curdRoutes);
// app.use("/api", categoryRoutes);
// app.use("/api", productRoutes);
// app.use("/api", cartRoutes);
// app.use("/api", initialDataRoutes);
// app.use("/api", pageRoutes);
// app.use("/api", addressRoutes);
// app.use("/api", orderRoutes);
// app.use("/api", adminOrderRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
