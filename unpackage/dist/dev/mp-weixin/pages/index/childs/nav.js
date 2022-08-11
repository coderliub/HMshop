"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "nav",
  setup(__props) {
    const navs = common_vendor.ref([
      {
        icon: "iconfont icon-ziyuan",
        title: "\u9ED1\u9A6C\u8D85\u5E02",
        path: "/pages/goods/goods"
      },
      {
        icon: "iconfont icon-guanyuwomen",
        title: "\u8054\u7CFB\u6211\u4EEC",
        path: "/pages/contact/contact"
      },
      {
        icon: "iconfont icon-tupian",
        title: "\u793E\u533A\u56FE\u7247",
        path: "/pages/pics/pics"
      },
      {
        icon: "iconfont icon-shipin",
        title: "\u5B66\u4E60\u89C6\u9891",
        path: "/pages/videos/videos"
      }
    ]);
    function navItemClick(url) {
      common_vendor.index.navigateTo({
        url
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(navs.value, (item, index, i0) => {
          return {
            a: common_vendor.n(item.icon),
            b: common_vendor.t(item.title),
            c: index,
            d: common_vendor.o(($event) => navItemClick(item.path), index)
          };
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u5B66\u4E60/uniapp/shop/pages/index/childs/nav.vue"]]);
wx.createComponent(Component);
