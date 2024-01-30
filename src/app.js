const express = require("express");
const connectDB = require("./db/connectDB");
const app = express();
const cors = require("cors");
require("dotenv").config();
const cloudinary = require('cloudinary').v2;
const port = process.env.PORT || 5000;

const authenticationRoutes = require("./routes/authentication/index");
const productRoutes = require("./routes/products");
const realTimeChatsRoutes = require("./routes/realtimeChats/index");
const managePropertyRoute = require("./routes/manageProperty/index");
const uploadMedia = require('./routes/media/index')

app.use(cors());
app.use(express.json());

          
cloudinary.config({ 
  cloud_name: 'deqkxg249', 
  api_key: '291618369758335', 
  api_secret: '6n-UyPBSm9AEMCJ_9vA5XOqJ1Ak' 
});

app.use(authenticationRoutes);
// app.use(productRoutes)
app.use(realTimeChatsRoutes);
app.use(managePropertyRoute);
app.use(uploadMedia);

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
