"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "goods-list",
  props: {
    goods: {
      type: Array
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.goods, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.sell_price),
            b: common_vendor.t(item.market_price),
            c: common_vendor.t(item.title),
            d: item.id
          };
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u5B66\u4E60/uniapp/shop/components/goods-list/goods-list.vue"]]);
wx.createComponent(Component);
