const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Expo Elite Server is Running");
});

app.all("*", (req, res, next) => {
  const error = new Error(`The Requested URL is Invalid: [${req.error}]`);
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(err.status || 500).json({
    message: error.message,
  });
});

const main = async () => {
  app.listen(port, (req, res) => {
    console.log(`Expo Elite Server running On Port: ${port}`);
  });
};

main();
