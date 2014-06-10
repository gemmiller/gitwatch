/**
 * Created by gmiller on 6/9/14.
 */
/* App Module */
    var dashboardApp = angular.module('dashboardApp',['ngRoute','dashboardControllers','dashboardServices']);

dashboardApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/overview', {
                    templateUrl: 'partials/dashboard.html',
                    controller: 'DashCtrl as dash'
                }).
                when('/reports', {
                    templateUrl: 'partials/reports.html',
                    controller: 'DashCtrl'
                }).
                when('/analytics', {
                    templateUrl: 'partials/analytics.html',
                    controller: 'DashCtrl'
                }).
                when('/export', {
                    templateUrl: 'partials/export.html',
                    controller: 'DashCtrl'
                }).
                otherwise({
                    redirectTo: '/overview'
                });
        }]);
