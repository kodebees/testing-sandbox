'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('SignUpCtrl', ['$scope', '$timeout','$state', function ($scope, $timeout,$state) {
$scope.register=function(){
     var url = window.location;
     $state.go('site.register1');
}
    }]);