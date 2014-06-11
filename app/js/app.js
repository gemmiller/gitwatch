/**
 * Created by gmiller on 6/9/14.
 */
/* App Module */
    var dashboardApp = angular.module('dashboardApp',['ngRoute','ui.router','dashboardControllers','dashboardServices']);

dashboardApp.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/overview');

        $stateProvider
            .state('overview', {
                url: '/overview',
                templateUrl: 'partials/dashboard.html',
                controller: 'DashCtrl as dash'
            })
            .state('reports', {
                url:'/reports',
                templateUrl: 'partials/reports.html'
            })
            .state('analytics',{
                url:'/analytics',
                templateUrl:'partials/analytics.html'
            })
            .state('export',{
                url:'/export',
                templateUrl:'partials/export.hmtl'
            })
        });
