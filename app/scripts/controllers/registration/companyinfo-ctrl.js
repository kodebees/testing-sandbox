'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('CompanyCtrl', ['$scope', '$timeout','$state', function ($scope, $timeout,$state) {
$scope.companyinfo=function(){

    alert("hi");

     $state.go('site.formwizard.users');
}

  }]);