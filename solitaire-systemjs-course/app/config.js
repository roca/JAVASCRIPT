System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ],
    "stage": 0
  },
  traceurOptions: {
    "experimental": true
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  depCache: {
    "app.js": [
      "github:angular/bower-angular@1.4.8",
      "github:fatlinesofcode/ngDraggable@0.1.8",
      "klondike/game.css!github:systemjs/plugin-css@0.1.20",
      "klondike/klondike.js"
    ],
    "github:angular/bower-angular@1.4.8": [
      "github:angular/bower-angular@1.4.8/angular"
    ],
    "klondike/klondike.js": [
      "github:angular/bower-angular@1.4.8",
      "klondike/game.js",
      "klondike/board.js",
      "klondike/scoring.js"
    ],
    "github:fatlinesofcode/ngDraggable@0.1.8": [
      "github:fatlinesofcode/ngDraggable@0.1.8/ngDraggable"
    ],
    "klondike/game.js": [
      "github:angular/bower-angular@1.4.8",
      "npm:underscore@1.8.3",
      "cards/deck.js",
      "klondike/piles/tableauPile.js",
      "klondike/piles/remainderPile.js",
      "klondike/piles/foundationPile.js"
    ],
    "klondike/board.js": [
      "github:angular/bower-angular@1.4.8",
      "github:angular/bower-angular-route@1.4.8",
      "klondike/welcome.md!lib/markdown-plugin.js"
    ],
    "klondike/scoring.js": [
      "npm:babel-runtime@5.8.34/helpers/create-class",
      "npm:babel-runtime@5.8.34/helpers/class-call-check"
    ],
    "github:fatlinesofcode/ngDraggable@0.1.8/ngDraggable": [
      "github:angular/bower-angular@1.4.8"
    ],
    "npm:underscore@1.8.3": [
      "npm:underscore@1.8.3/underscore"
    ],
    "cards/deck.js": [
      "npm:underscore@1.8.3",
      "cards/card.js"
    ],
    "github:angular/bower-angular-route@1.4.8": [
      "github:angular/bower-angular-route@1.4.8/angular-route"
    ],
    "npm:babel-runtime@5.8.34/helpers/create-class": [
      "npm:babel-runtime@5.8.34/core-js/object/define-property"
    ],
    "klondike/piles/tableauPile.js": [
      "npm:babel-runtime@5.8.34/core-js/object/create",
      "klondike/piles/pile.js",
      "npm:underscore@1.8.3"
    ],
    "klondike/piles/remainderPile.js": [
      "npm:babel-runtime@5.8.34/core-js/object/create",
      "klondike/piles/pile.js"
    ],
    "klondike/piles/foundationPile.js": [
      "npm:babel-runtime@5.8.34/core-js/object/create",
      "klondike/piles/pile.js"
    ],
    "npm:babel-runtime@5.8.34/core-js/object/define-property": [
      "npm:core-js@1.2.6/library/fn/object/define-property"
    ],
    "npm:babel-runtime@5.8.34/core-js/object/create": [
      "npm:core-js@1.2.6/library/fn/object/create"
    ],
    "github:angular/bower-angular-route@1.4.8/angular-route": [
      "github:angular/bower-angular@1.4.8"
    ],
    "npm:core-js@1.2.6/library/fn/object/define-property": [
      "npm:core-js@1.2.6/library/modules/$"
    ],
    "npm:core-js@1.2.6/library/fn/object/create": [
      "npm:core-js@1.2.6/library/modules/$"
    ]
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.8",
    "angular-mocks": "github:angular/bower-angular-mocks@1.4.8",
    "angular-route": "github:angular/bower-angular-route@1.4.8",
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "card": "cards/card.js",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "deck": "cards/deck.js",
    "marked": "npm:marked@0.3.5",
    "md": "lib/markdown-plugin.js",
    "ngDraggable": "github:fatlinesofcode/ngDraggable@0.1.8",
    "pile": "klondike/piles/pile.js",
    "traceur": "github:jmcriffey/bower-traceur@0.0.92",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.92",
    "underscore": "npm:underscore@1.8.3",
    "github:angular/bower-angular-mocks@1.4.8": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular/bower-angular-route@1.4.8": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:fatlinesofcode/ngDraggable@0.1.8": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
