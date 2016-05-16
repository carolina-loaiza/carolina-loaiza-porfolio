'use strict';

(function() {

  angular
  .module('portfolio')
  .controller('ProjectPageController', ProjectPageController);

    function ProjectPageController ($stateParams, reqService) {
      var vm = this;
      
      var project = $stateParams.project_name;
      vm.data = reqService.getData(project);
    }
})();