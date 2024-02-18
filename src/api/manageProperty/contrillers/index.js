const addProperty = require("./addProperty");
const getProperty = require("./getProperty");
const getAllProperty = require("./getAllProperty");
const updateProperty = require("./updateProperty");
const deleteProperty = require("./deleteProperty");
const searchAndSort = require('./searchAndSort');
const addOrRemoveLike = require("./addOrRemoveLike");
const searchbyLoc = require("./searchbyLoc.js");
const updatePropertyStatusPublish = require("./updatePropertyStatusPublish");
const updatePropertyStatusUnpublish = require("./updatePropertyStatusUnpublish");
const getUserLikeCount = require("./getUserLikeCount");



module.exports = {
  addProperty,
  getProperty,
  getAllProperty,
  updateProperty,
  deleteProperty,
  searchAndSort,
  addOrRemoveLike,
  searchbyLoc,
  updatePropertyStatusPublish,
  updatePropertyStatusUnpublish,
  getUserLikeCount,
};
