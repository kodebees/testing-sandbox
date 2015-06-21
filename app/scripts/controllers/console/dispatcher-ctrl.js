'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp', ['ui.bootstrap'])
  .controller('DispatchCtrl', ['$scope', '$timeout','$state','$modal', function ($scope, $timeout,$state,$modal) {
console.log("DispatcerhCtrl");
$scope.searchJobs = function(){
    console.log("creating customer");
    var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'views/dispatcher/vehicleassignedjobs.html',
        // controller: 'ModalInstanceCtrl',
        size: 'lg'

    });
    modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
    }, function () {
        console.log('Modal dismissed at: ' + new Date());
    });
}


        $scope.closedJobs = function(){
            console.log("creating customer");
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'views/dispatcher/closedjobs.html',
                // controller: 'ModalInstanceCtrl',
                size: 'lg'

            });
            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        }

        $scope.createCustomer = function(){
            console.log("creating customer");
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'views/dispatcher/searchcustomer.html',
                // controller: 'ModalInstanceCtrl',
                size: 'lg'

            });
            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        }

        $scope.alarms = function(){
            console.log("creating customer");
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'views/dispatcher/searchcustomer.html',
                // controller: 'ModalInstanceCtrl',
                size: 'lg'

            });
            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        }

        $scope.messages = function(){
            console.log("creating customer");
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'views/dispatcher/searchcustomer.html',
                // controller: 'ModalInstanceCtrl',
                size: 'lg'

            });
            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        }

        $scope.alerts = function(){
            console.log("creating customer");
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'views/dispatcher/searchcustomer.html',
                // controller: 'ModalInstanceCtrl',
                size: 'lg'

            });
            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        }



    }]);

