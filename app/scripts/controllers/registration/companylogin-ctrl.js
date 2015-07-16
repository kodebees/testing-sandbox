'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('companyLoginCtrl', ['$scope', '$timeout','$state', function ($scope, $timeout,$state) {


        $scope.login={
            company:[
                {
                    "companyname" : "Kathirco",
                    "url" : "https://kathirco.ietms.com"
                },
                {
                    "companyname" : "Sureshco",
                    "url" : "https://sureshco.ietms.com"
                }
            ]
        };


    }]);
