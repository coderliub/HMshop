"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "contact",
  setup(__props) {
    const state = common_vendor.reactive({
      longitude: 120.363172,
      latitude: 30.312212,
      scale: 13,
      markers: [
        {
          longitude: 120.363172,
          latitude: 30.312212,
          iconPath: "../../static/hmlogo.png",
          width: 30,
          height: 30
        }
      ]
    });
    function phone() {
      common_vendor.index.makePhoneCall({
        phoneNumber: "400-618-9090"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(phone),
        b: state.longitude,
        c: state.scale,
        d: state.latitude,
        e: state.markers
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u5B66\u4E60/uniapp/shop/pages/contact/contact.vue"]]);
wx.createPage(MiniProgramPage);
