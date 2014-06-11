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
                templateUrl: 'app/partials/dashboard.html',
                controller: 'DashCtrl as dash'
            })
            .state('reports', {
                url:'/reports',
                templateUrl: 'app/partials/reports.html'
            })
            .state('analytics',{
                url:'/analytics',
                templateUrl:'app/partials/analytics.html'
            })
            .state('export',{
                url:'/export',
                templateUrl:'app/partials/export.html'
            })
        });
