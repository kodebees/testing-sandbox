'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('notifications',function(){
		return {
        templateUrl:'scripts/directives/notifications/notifications.html',
        restrict: 'E',
        replace: true
    	}
	})
    .directive('adminnotifications',function(){
        return {
            templateUrl:'scripts/directives/notifications/admin_notifications.html',
            restrict: 'E',
            replace: true
        }
    }).directive('cpnotifications',function(){
        return {
            templateUrl:'scripts/directives/notifications/cp_notifications.html',
            restrict: 'E',
            replace: true
        }
    }).directive('vendornotifications',function(){
        return {
            templateUrl:'scripts/directives/notifications/vendor_notifications.html',
            restrict: 'E',
            replace: true
        }
    });



