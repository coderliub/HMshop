"use strict";
var common_vendor = require("../../common/vendor.js");
var util_home = require("../../util/home.js");
require("../../util/api.js");
if (!Math) {
  goodslist();
}
const goodslist = () => "../../components/goods-list/goods-list.js";
const _sfc_main = {
  __name: "goods",
  setup(__props) {
    const pageindex = common_vendor.ref(1);
    const state = common_vendor.reactive({
      goods: [],
      flag: false
    });
    function getGoods(pageindex2, callBack) {
      util_home.getHomeGoodsx(pageindex2).then((res) => {
        state.goods.push(...res.data.message);
        pageindex2.value += 1;
        callBack && callBack();
      });
    }
    common_vendor.onMounted(() => {
      getGoods(pageindex);
    });
    common_vendor.onReachBottom(() => {
      console.log("\u4E0A\u62C9\u52A0\u8F7D\u66F4\u591A");
      if (state.goods.length < (pageindex.value - 1) * 10) {
        return state.flag = true;
      }
      getGoods(pageindex);
    });
    common_vendor.onPullDownRefresh(() => {
      console.log("\u4E0B\u62C9\u5237\u65B0\u4E86");
      pageindex.value = 1;
      state.goods = [];
      state.flag = false;
      setTimeout(() => {
        getGoods(pageindex, () => {
          common_vendor.index.stopPullDownRefresh();
        });
      }, 1e3);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          goods: state.goods
        }),
        b: state.flag
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5566b618"], ["__file", "D:/\u5B66\u4E60/uniapp/shop/pages/goods/goods.vue"]]);
wx.createPage(MiniProgramPage);
