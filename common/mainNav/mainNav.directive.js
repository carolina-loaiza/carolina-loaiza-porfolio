'use strict';

(function() {

    angular
    .module('portfolio')
    .directive('mainNav', function($location, $anchorScroll) {
        return {
          templateUrl: 'common/mainNav/mainNav.html',
          bindToController: true,
          controllerAs: 'nav',
          controller: 'NavbarController',
          restrict: 'A',
          link: function(scope) {
            scope.isCurrentPath = function(path) {
              if ( $location.path() != path){
                return true;
              }
            };
          }
        };
    })
    .controller('NavbarController', function($location, $anchorScroll) {
      var vm = this;
      vm.textMenu = 'Menu';

      vm.scrollTo = function(anchor) {
        vm.isMenuShow = false;
        vm.textMenu = 'Menu';
        $location.hash(anchor);
        $anchorScroll();
      }

      vm.showMenu = function() {

        if (vm.isMenuShow) {
          vm.isMenuShow = false;
          vm.textMenu = 'Menu';
        }else {
          vm.textMenu = 'Hide';
          vm.isMenuShow = true;
        }
      }
    });
})();
