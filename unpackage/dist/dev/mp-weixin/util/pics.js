"use strict";
var util_api = require("./api.js");
function getPicsCate() {
  return util_api.myRequest({
    url: "/api/getimgcategory"
  });
}
function getImages(id) {
  return util_api.myRequest({
    url: "/api/getimages/" + id
  });
}
exports.getImages = getImages;
exports.getPicsCate = getPicsCate;
