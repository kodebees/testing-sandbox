'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp', ['ui.bootstrap'])
  .controller('DispatchCtrl', ['$scope', '$timeout','$state','$dialog', function ($scope, $timeout,$state) {
        $scope.dialogbox =function(){

            $timeout(function(){
                $dialog.dialog({}).open('map.html');
            }, 3000);

        }



  }]);


