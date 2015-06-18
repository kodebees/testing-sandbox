'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('TrailCtrl', ['$scope', '$timeout','$state', function ($scope, $timeout,$state) {
$scope.goHome=function(){

    alert("hi");

     $state.go('dashboard');
}

  }]);