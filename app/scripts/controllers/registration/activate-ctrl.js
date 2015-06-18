'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ActivateCtrl', ['$scope', '$timeout','$state', function ($scope, $timeout,$state) {
$scope.activate=function(){

     $state.go('site.formwizard.company');
}

  }]);