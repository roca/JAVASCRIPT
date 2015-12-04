/* eslint-env node*/

module.exports = function (config) {
  "use strict";

  config.set({

    basePath: "./",

    files: [],

    proxies: {
      "/bower_components" : "/base/app/bower_components",
      "/node_modules"     : "/base/node_modules",
      "/base/cards"       : "/base/app/cards",
      "/base/klondike"    : "/base/app/klondike",
      "/base/jspm_packages"    : "/base/app/jspm_packages"
    },

    jspm: {
      serveFiles: [
        "app/**/*.js",
        "app/bower_components/traceur/traceur.js"
      ],
      loadFiles: [
        "tests/cards/*.js",
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
