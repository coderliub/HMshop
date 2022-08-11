"use strict";
var util_api = require("./api.js");
function getNews() {
  return util_api.myRequest({
    url: "/api/getnewslist"
  });
}
exports.getNews = getNews;
