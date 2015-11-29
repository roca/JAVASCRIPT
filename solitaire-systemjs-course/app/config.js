System.config({
  transpiler: "traceur",
  defaultJSExtensions: true,
  map: {
     "traceur" : "./bower_components/traceur/traceur.js",
     "card"    : "cards/card.js",
     "deck"    : "cards/deck.js",
     "pile"    : "klondike/piles/pile.js"
  },
  traceurOptions: {
    experimental: true
  }

  /*  Could'nt get this to work
  transpiler: "babel",
  map : {
    "babel" : "../node_modules/babel-core/index.js"
  }
  */
})
