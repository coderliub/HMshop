"use strict";
var common_vendor = require("../../common/vendor.js");
var util_pics = require("../../util/pics.js");
require("../../util/api.js");
const _sfc_main = {
  __name: "pics",
  setup(__props) {
    const state = common_vendor.reactive({
      cates: [],
      active: 0,
      secondData: []
    });
    common_vendor.onMounted(util_pics.getPicsCate().then((res) => {
      state.cates = res.data.message;
    }));
    function leftClickHandle(index, id) {
      state.active = index;
      util_pics.getImages(id).then((res) => {
        console.log("\u6210\u529F\u83B7\u53D6\u6570\u636E", index);
        state.secondData = res.data.message;
      });
    }
    function previewImg(current) {
      const urls = state.secondData.map((item) => {
        return "../../static/imgs.jpg";
      });
      common_vendor.index.previewImage({
        current,
        urls
      });
    }
    setTimeout(() => {
      leftClickHandle(state.active, state.cates[state.active].id);
    }, 500);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(state.cates, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.n(state.active === index ? "active" : ""),
            c: item.id,
            d: common_vendor.o(($event) => leftClickHandle(index, item.id), item.id)
          };
        }),
        b: common_vendor.f(state.secondData, (item, k0, i0) => {
          return {
            a: common_vendor.o(($event) => previewImg(item.img_url)),
            b: common_vendor.t(item.title),
            c: item.id
          };
        }),
        c: state.secondData.length === 0
      }, state.secondData.length === 0 ? {} : {});
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u5B66\u4E60/uniapp/shop/pages/pics/pics.vue"]]);
wx.createPage(MiniProgramPage);
