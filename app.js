'use strict';

(function() {

  angular
  .module('portfolio', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider, $sceProvider) {
    $sceProvider.enabled(false);

    $urlRouterProvider
    .otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('projectPage', {
        url: '/project/:project_name',
        controller: 'ProjectPageController',
        controllerAs: 'project',
        templateUrl: 'common/projectPage/projectPage.html'
      })
  })
})();