'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('vendorCtrl', ['$scope', '$timeout','$state', function ($scope, $timeout,$state) {


        $scope.user={
            details:[
                {
                    "name" : "SVS"

                },
                {
                    "name" : "SRS"

                }
            ]
        };


    }]);
