"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/bind-component/index",
    marko_component = require("./"),
    legacy_helpers = require("marko/src/runtime/components/legacy/helpers"),
    marko_rendererLegacy = legacy_helpers.r,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, __component, widget, component) {
  var data = input;

  out.w("<div data-widget=\"/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/bind-component/index\"" +
    marko_attr("id", __component.elId()) +
    "></div>");
}

marko_template._ = marko_rendererLegacy(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    legacy: true,
    id: "/marko-test$1.0.0/components-compilation/fixtures-html-deprecated/bind-component/index",
    component: "./"
  };
