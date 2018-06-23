// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import "bootstrap/scss/bootstrap.scss";
import "bootstrap";

Vue.config.productionTip = false;

Vue.filter("toUpperCase", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.toUpperCase();
});

Vue.filter("thousandComma", function(value) {
  if (!value) return "";
  value = value.toString();
  var pattern = /(-?\d+)(\d{3})/;

  while (pattern.test(value)) {
    value = value.replace(pattern, "$1,$2");
  }
  return value;
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: {
    App
  },
  template: "<App/>"
});
