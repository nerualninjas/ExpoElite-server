const addProperty = require("./addProperty");
const getProperty = require("./getProperty");
const getAllProperty = require("./getAllProperty");
const getAllPublishProperty = require("./getAllPublishProperty");

const updateProperty = require("./updateProperty");
const deleteProperty = require("./deleteProperty");
const searchAndSort = require('./searchAndSort');
const addOrRemoveLike = require("./addOrRemoveLike");
const searchbyLoc = require("./searchbyLoc.js");
const updatePropertyStatusPublish = require("./updatePropertyStatusPublish");
const updatePropertyStatusUnpublish = require("./updatePropertyStatusUnpublish");
const getUserLikeCount = require("./getUserLikeCount");
const addComment = require("./addComment");
const getComments = require("./getComments.js")
const getSellerPropertys = require("./getSellerPropertys")
const getUserCommentCount = require("./getUserCommentCount");
const getProductsBySpecialOffers = require("./getProductsBySpecialOffers")
const allPropertyNoLimit = require('./allPropertyNoLimit.js')
const getTotalProperty = require("./getTotalProperty.js")

module.exports = {
  addProperty,
  getProperty,
  getTotalProperty,
  getAllProperty,
  getAllPublishProperty,
  updateProperty,
  deleteProperty,
  searchAndSort,
  addOrRemoveLike,
  searchbyLoc,
  updatePropertyStatusPublish,
  updatePropertyStatusUnpublish,
  getUserLikeCount,
  addComment,
  getComments,
  getSellerPropertys,
  getUserCommentCount,
  getProductsBySpecialOffers,
  allPropertyNoLimit
};
