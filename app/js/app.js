/**
 * Created by gmiller on 6/9/14.
 */
/* App Module */
    var dashboardApp = angular.module('dashboardApp',['ngRoute','dashboardControllers']);

dashboardApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/overview', {
                    templateUrl: 'partials/dashboard.html',
                    controller: 'DashCtrl'
                }).
                when('/reports', {
                    templateUrl: 'partials/reports.html',
                    controller: 'DashCtrl'
                }).
                otherwise({
                    redirectTo: '/overview'
                });
        }]);
