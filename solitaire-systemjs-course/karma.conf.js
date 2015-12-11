/* eslint-env node*/
var unlimited = require('unlimited')
unlimited()


module.exports = function (config) {
  "use strict";

  config.set({

    basePath: "./",

    files: [],

    proxies: {
      "/node_modules"     : "/base/node_modules",
      "/base/jspm_packages"    : "/base/app/jspm_packages",
      "/base/klondike" : " /base/app/klondike",
      "/base/lib" : "/base/app/lib"
    },

    jspm: {
      serveFiles: [
        "app/**/*.js",
        "app/**/*.md",
        "node_modules/babel-core/index.js"
      ],
      loadFiles: [
        "tests/klondike/**/*.js"
      ]
    },

    autoWatch: true,

    frameworks: ["jspm","jasmine"],

    browsers: ["Chrome"],

    plugins: [
      "karma-jspm",
      "karma-chrome-launcher",
      "karma-jasmine",
      "karma-junit-reporter"
    ],

    junitReporter: {
      outputFile: "test_out/unit.xml",
      suite: "unit"
    }

  });
};
