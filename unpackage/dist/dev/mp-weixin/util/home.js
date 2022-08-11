"use strict";
var util_api = require("./api.js");
function getHomeLunBo() {
  return util_api.myRequest({
    url: "/api/getlunbo"
  });
}
function getHomeGoods() {
  return util_api.myRequest({
    url: "/api/getgoods?pageindex=1"
  });
}
function getHomeGoodsx(pageindex) {
  return util_api.myRequest({
    url: "/api/getgoods?pageindex=" + pageindex.value,
    params: { pageindex }
  });
}
exports.getHomeGoods = getHomeGoods;
exports.getHomeGoodsx = getHomeGoodsx;
exports.getHomeLunBo = getHomeLunBo;
