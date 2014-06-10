/**
 * Created by gmiller on 6/9/14.
 */
var dashboardControllers = angular.module('dashboardControllers',[]);
dashboardControllers.controller('DashCtrl', ['$scope','$http',
    function($scope, $http) {
        $http.get('data/placeholders.json').success(function(data){
            $scope.holders = data;
        });
        $http.get('data/tabledata.json').success(function(data){
            $scope.holders = data;
        });
    }]);

