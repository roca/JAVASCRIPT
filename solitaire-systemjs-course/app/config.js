System.config({
  baseURL: "/app",
  defaultJSExtensions: true,
  transpiler: "traceur",
  traceurOptions: {
    "experimental": true
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "card": "cards/card.js",
    "deck": "cards/deck.js",
    "pile": "klondike/piles/pile.js",
    "traceur": "github:jmcriffey/bower-traceur@0.0.92",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.92",
    "underscore": "npm:underscore@1.8.3"
  }
});
