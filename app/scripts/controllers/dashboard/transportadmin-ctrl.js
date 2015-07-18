'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('transportadminCtrl', ['$scope', '$timeout','$state', function ($scope, $timeout,$state) {


        $scope.user={
            details:[
                {
                    "name" : "TransportAdmin1"

                },
                {
                    "name" : "TransportAdmin2"

                }
            ]
        };


    }]);
