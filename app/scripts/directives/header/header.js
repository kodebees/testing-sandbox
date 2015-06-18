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
	});



