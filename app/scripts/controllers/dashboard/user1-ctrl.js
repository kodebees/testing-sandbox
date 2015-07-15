'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
*/
angular.module('sbAdminApp')
    .controller('user1Ctrl', ['$scope', '$timeout','$state', function ($scope, $timeout,$state) {


            $scope.user={
                details:[
                    {
                        "name" : "Kathir",
                        "role" : "driver"
                    },
                    {
                        "name" : "Suresh",
                        "role" : "dispatcher"
                    }
                ]
            };


    }]);
