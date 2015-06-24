'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar'
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true
    });

    $urlRouterProvider.otherwise('/site/');

    $stateProvider
        .state('site', {
            url:'/site',
            templateUrl: 'views/site/main.html',
            resolve: {
                loadMyDirectives:function($ocLazyLoad){
                    return $ocLazyLoad.load(
                        {
                            name:'sbAdminApp',
                            files:[
                                'scripts/directives/header/header.js'
                            ]
                        }),
                        $ocLazyLoad.load(
                            {
                                name:'toggle-switch',
                                files:["../bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                                    "../bower_components/angular-toggle-switch/angular-toggle-switch.css"


                                ]
                            }),
                        $ocLazyLoad.load(
                            {
                                name:'ngAnimate',
                                files:['../bower_components/angular-animate/angular-animate.js']
                            }),
                    $ocLazyLoad.load(
                        {
                            name:'ngCookies',
                            files:['bower_components/angular-cookies/angular-cookies.js']
                        }),
                    $ocLazyLoad.load(
                        {
                            name:'ngResource',
                            files:['bower_components/angular-resource/angular-resource.js']
                        }),
                    $ocLazyLoad.load(
                        {
                            name:'ngSanitize',
                            files:['bower_components/angular-sanitize/angular-sanitize.js']
                        }),
                    $ocLazyLoad.load(
                        {
                            name:'ngTouch',
                            files:['bower_components/angular-touch/angular-touch.js']
                        })
                }
            }
        })
        .state('site.home',{
            url:'/',
            controller: 'MainCtrl',
            templateUrl:'views/site/site_home.html',
            resolve: {
                loadMyFiles:function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name:'sbAdminApp',
                        files:[
                            'scripts/controllers/main.js',
                            'scripts/directives/timeline/timeline.js',
                            'scripts/directives/notifications/notifications.js',
                            'scripts/directives/chat/chat.js',
                            'scripts/directives/dashboard/stats/stats.js'
                        ]
                    })
                }
            }
        })
        .state('site.about',{
            url:'/',
            controller: 'MainCtrl',
            templateUrl:'views/site/about.html'

        })

        .state('site.contact',{
            url:'/',
            controller: 'MainCtrl',
            templateUrl:'views/site/contact.html'

        })
        .state('site.faq',{
            url:'/',
            controller: 'MainCtrl',
            templateUrl:'views/site/faq.html'

        })
        .state('site.signupform',{
            templateUrl:'views/registration/signupform.html',
            url:'/signupform',
            controller:'SignUpCtrl',
            resolve: {
                loadMyFile:function($ocLazyLoad) {
                    $ocLazyLoad.load({
                        name:'sbAdminApp',
                        files:['scripts/controllers/registration/signup-ctrl.js']
                    })
                }
            }

        })

        .state('site.companyLogin',{
            templateUrl:'views/company-login.html',
            url:'/companylogin'
        })

        .state('site.dispatcherLogin',{
            templateUrl:'views/dispatcher-login.html',
            url:'/dispatcherlogin'
        })



        .state('site.register1',{
            templateUrl:'views/registration/activate.html',
            url:'/activate',
            controller:'ActivateCtrl',
            resolve: {
                loadMyFile:function($ocLazyLoad) {
                    $ocLazyLoad.load({
                        name:'sbAdminApp',
                        files:['scripts/controllers/registration/activate-ctrl.js']
                    })
                }
            }

        })
        .state('site.formwizard',{
            templateUrl:'views/registration/formwizard.html',
            url:'/formwizard'
        })


        .state('site.formwizard.company', {
            url: '/companydetails',
            templateUrl: 'views/registration/companydetails.html',
            controller:'CompanyCtrl',
            resolve: {
                loadMyFile:function($ocLazyLoad) {
                    $ocLazyLoad.load({
                        name:'sbAdminApp',
                        files:['scripts/controllers/registration/companyinfo-ctrl.js']
                    })
                }
            }
        })

        .state('site.formwizard.users', {
            url: '/users',
            templateUrl: 'views/registration/users.html'
        })

        .state('site.formwizard.vehicle', {
            url: '/vehicle',
            templateUrl: 'views/registration/vehicle.html'
        })

        .state('site.formwizard.trail', {
            url: '/trail',
            templateUrl: 'views/registration/start-trail.html',
            controller:'TrailCtrl',
            resolve: {
                loadMyFile:function($ocLazyLoad) {
                    $ocLazyLoad.load({
                        name:'sbAdminApp',
                        files:['scripts/controllers/registration/trail_ctrl.js']
                    })
                }
            }
        })
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["../bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "../bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['../bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['../bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['../bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['../bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['../bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'views/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/main.js',
                  'scripts/controllers/chartContoller.js',
              'scripts/directives/timeline/timeline.js',
              'scripts/directives/notifications/notifications.js',
              'scripts/directives/chat/chat.js',
              'scripts/directives/dashboard/stats/stats.js'

              ]
            }),
              $ocLazyLoad.load({
                  name:'chart.js',
                  files:[
                      '../bower_components/angular-chart.js/dist/angular-chart.min.js',
                      '../bower_components/angular-chart.js/dist/angular-chart.css'
                  ]
              })
          }
        }
      })
      .state('dashboard.billOverView',{
        templateUrl:'views/dashboard/bill_overview.html',
        url:'/billoverview'
    })
      .state('dashboard.info',{
        templateUrl:'views/dashboard/billinginfo.html',
        url:'/billinfo'
    })
        .state('dashboard.settings',{
            templateUrl:'views/dashboard/settings.html',
            url:'/settings'
        })

        .state('dashboard.users',{
            templateUrl:'views/registration/users.html',
            url:'/users'
        })
        .state('dashboard.vehicles',{
            templateUrl:'views/registration/vehicle.html',
            url:'/vehicles'
        })
        .state('dashboard.servicePincode',{
            templateUrl:'views/dashboard/servicearea.html',
            url:'/servicePincode'
        })
        .state('dashboard.tarrifs',{
            templateUrl:'views/dashboard/tariff.html',
            url:'/tarrifs'
        })
        .state('dashboard.linkedcompany',{
            templateUrl:'views/dashboard/linkedcompanies.html',
            url:'/linkedcompany'
        })








        .state('dispatch_console', {
            url:'/console',
            /**/
            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'views/dispatcher/dispatcher-main.html',
                    controller:'DispatchCtrl',
                    resolve: {
                        loadMyFile:function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name:'sbAdminApp',
                                files:[
                                    'scripts/controllers/console/dispatcher-ctrl.js',
                                ]
                            })

                        }
                    }
                },
                // for column two, we'll define a separate controller
                'newJob@dispatch_console': {
                templateUrl: 'views/dispatcher/newjob-now.html'},
                    /*controller: 'scotchController'*/
                'map@dispatch_console': {
                templateUrl: 'views/dispatcher/map.html'},

                'jobDetails@dispatch_console': {
                templateUrl: 'views/dispatcher/active-assigned-unassignedjobs.html'
                },

                'vehicle@dispatch_console':{
                templateUrl: 'views/dispatcher/jobassignedvehicles.html'

                }


            }
        })


  }]);



    
