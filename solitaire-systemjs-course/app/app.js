import angular from 'angular';

import "klondike/klondike.js"

angular.module("solitaire", ["klondike"]);

angular.element(document).ready(() => {
  angular.bootstrap(document,["solitaire"]);
});
