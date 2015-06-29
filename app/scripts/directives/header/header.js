'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('siteheader',function(){
		return {
        templateUrl:'scripts/directives/header/siteheader.html',
        restrict: 'E',
        replace: true
    	}
	}).directive('dashboardheader',function(){
		return {
        templateUrl:'scripts/directives/header/dashboard_header.html',
        restrict: 'E',
        replace: true
    	}
	}).directive('cpdashboardheader',function(){
        return {
            templateUrl:'scripts/directives/header/cp_dashboard_header.html',
            restrict: 'E',
            replace: true
        }
    }).directive('vendordashboardheader',function(){
        return {
            templateUrl:'scripts/directives/header/vendor_dashboard_header.html',
            restrict: 'E',
            replace: true
        }
    }).directive('admindashboardheader',function(){
        return {
            templateUrl:'scripts/directives/header/admin_dashboard_header.html',
            restrict: 'E',
            replace: true
        }
    });





