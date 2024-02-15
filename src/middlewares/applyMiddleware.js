const cors = require("cors");
const express = require("express");
const { LOCAL_CLIENT, CLIENT_DEV } = require("../config/default");

//todo:token

const applyMiddleWare = (app) => {
  app.use(express.json());
  app.use(
    cors({
      origin: [LOCAL_CLIENT, CLIENT_DEV],
      credentials: true,
    })
  );
};

module.exports = applyMiddleWare;