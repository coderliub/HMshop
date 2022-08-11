"use strict";
var common_vendor = require("./common/vendor.js");
var util_api = require("./util/api.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/news/news.js";
  "./pages/cart/cart.js";
  "./pages/member/member.js";
  "./pages/goods/goods.js";
  "./pages/contact/contact.js";
  "./pages/pics/pics.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u5B66\u4E60/uniapp/shop/App.vue"]]);
const app = common_vendor.createApp(App);
app.config.globalProperties.$myRequest = util_api.myRequest;
app.mount("#app");
