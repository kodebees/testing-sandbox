'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('helpdesk1Ctrl', ['$scope', '$timeout','$state', function ($scope, $timeout,$state) {


        $scope.user={
            details:[
                {
                    "name" : "Helpdesk1"

                },
                {
                    "name" : "Helpdesk2"

                }
            ]
        };


    }]);
