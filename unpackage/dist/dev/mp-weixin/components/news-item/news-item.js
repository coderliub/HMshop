"use strict";
var common_vendor = require("../../common/vendor.js");
var components_newsItem_news = require("./news.js");
const _sfc_main = {
  __name: "news-item",
  props: {
    newsList: {
      type: Array
    }
  },
  setup(__props) {
    const props = __props;
    common_vendor.computed$1(() => {
      components_newsItem_news.formatDate();
    });
    function navigator(id) {
      this.$emit("itemClick", id);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.newsList, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(common_vendor.unref(components_newsItem_news.formatDate)(item.add_time, "hh:mm yyyy-MM-dd")),
            c: common_vendor.t(item.click),
            d: item.id,
            e: common_vendor.o(($event) => navigator(item.id), item.id)
          };
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u5B66\u4E60/uniapp/shop/components/news-item/news-item.vue"]]);
wx.createComponent(Component);
