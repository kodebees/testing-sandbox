'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('SignUpCtrl', ['$scope', '$timeout','$state','$modal', function ($scope, $timeout,$state,$modal) {


        $scope.register = function () {
            var url = window.location;
            alert("Res");

            $state.go('site.register1');
        }
    }]);