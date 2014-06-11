/**
 * Created by gmiller on 6/10/14.
 */
var dashboardServices = angular.module('dashboardServices', ['ngResource']);

dashboardServices.factory('Charts', ['$resource',
    function($resource){
        return $resource('app/data/placeholders.json');
    }]);


dashboardServices.factory('Table', ['$resource',
    function($resource){
        return $resource('app/data/tabledata.json');
    }]);