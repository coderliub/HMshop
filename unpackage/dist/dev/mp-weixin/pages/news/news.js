"use strict";
var common_vendor = require("../../common/vendor.js");
var util_news = require("../../util/news.js");
require("../../util/api.js");
if (!Array) {
  const _easycom_news_item2 = common_vendor.resolveComponent("news-item");
  _easycom_news_item2();
}
const _easycom_news_item = () => "../../components/news-item/news-item.js";
if (!Math) {
  _easycom_news_item();
}
const _sfc_main = {
  __name: "news",
  setup(__props) {
    const state = common_vendor.reactive({
      newsList: []
    });
    common_vendor.onMounted(util_news.getNews().then((res) => {
      state.newsList = res.data.message;
    }));
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          newsList: state.newsList
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u5B66\u4E60/uniapp/shop/pages/news/news.vue"]]);
wx.createPage(MiniProgramPage);
