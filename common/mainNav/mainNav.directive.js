'use strict';

(function() {

    angular
    .module('portfolio')
    .directive('mainNav', function($location) {
        return {
          templateUrl: 'common/mainNav/mainNav.html',
          restrict: 'A',
          link: function(scope) {
            scope.isCurrentPath = function(path) {
              if ( $location.path() != path){
                return true;
              }
            };

            scope.scrollTo = function(element) {
              document.querySelector('body').animate({
                scrollTop: document.getElementById(element).offset().top
              }, 2000);
            }

            /*elem.mainContainer.stop().animate({
              scrollTop: $( path ).offset().top - -10
            }, seconds);*/
          }

        };
    });

})();
