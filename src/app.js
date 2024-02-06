const express = require("express");
const connectDB = require("./db/connectDB");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

const authenticationRoutes = require("./routes/authentication/index");
const notificationRoutes = require("./routes/notification")
const realTimeChatsRoutes = require("./routes/realtimeChats/index");
const managePropertyRoute = require("./routes/manageProperty/index");

app.use(cors());
app.use(express.json());

app.use(authenticationRoutes);
app.use(realTimeChatsRoutes);
app.use(managePropertyRoute);
app.use(notificationRoutes);

app.get("/", (req, res) => {
  res.send("Expo Elite Server is Running");
});

app.all("*", (req, res, next) => {
  const error = new Error(`The Requested URL is Invalid: [${req.url}]`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

const main = async () => {
  await connectDB();
  app.listen(port, (req, res) => {
    console.log(`Expo Elite Server running On Port: ${port}`);
  });
};

main();
