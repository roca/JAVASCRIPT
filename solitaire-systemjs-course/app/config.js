System.config({
  transpiler: "traceur",
  map: {
     "traceur" : "bower_components/traceur/traceur.js"
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
