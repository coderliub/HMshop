"use strict";
var common_vendor = require("../../common/vendor.js");
var util_home = require("../../util/home.js");
require("../../util/api.js");
if (!Math) {
  (Nav + goodslist)();
}
const Nav = () => "./childs/nav.js";
const goodslist = () => "../../components/goods-list/goods-list.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const swipers = common_vendor.ref();
    common_vendor.onMounted(util_home.getHomeLunBo().then((res) => {
      swipers.value = res.data.message;
    }));
    const goods = common_vendor.ref();
    common_vendor.onMounted(util_home.getHomeGoods().then((res) => {
      goods.value = res.data.message;
    }));
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(swipers.value, (item, k0, i0) => {
          return {
            a: item.img,
            b: item.id
          };
        }),
        b: common_vendor.p({
          goods: goods.value
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u5B66\u4E60/uniapp/shop/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
