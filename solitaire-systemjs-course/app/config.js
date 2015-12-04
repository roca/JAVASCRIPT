System.config({
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
    "angular": "github:angular/bower-angular@1.4.8",
    "angular-mocks": "github:angular/bower-angular-mocks@1.4.8",
    "angular-route": "github:angular/bower-angular-route@1.4.8",
    "card": "cards/card.js",
    "deck": "cards/deck.js",
    "pile": "klondike/piles/pile.js",
    "traceur": "github:jmcriffey/bower-traceur@0.0.92",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.92",
    "underscore": "npm:underscore@1.8.3",
    "github:angular/bower-angular-mocks@1.4.8": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular/bower-angular-route@1.4.8": {
      "angular": "github:angular/bower-angular@1.4.8"
    }
  }
});
