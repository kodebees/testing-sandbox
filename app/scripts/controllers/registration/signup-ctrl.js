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


$scope.register=function(){
     var url = window.location;
    alert("Res");
    //$scope.dialogbox();
    // $state.go('site.register1');
    var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'views/dispatcher/createcustomer.html',
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
