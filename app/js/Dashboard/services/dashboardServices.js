/**
 * Created by gmiller on 6/10/14.
 */
var dashboardServices = angular.module('dashboardServices', ['ngResource']);

dashboardServices.factory('Charts', ['$resource',
    function($resource){
        return $resource('data/placeholders.json', {}, {
            query: {method:'GET', params:{}, isArray:true}
        });
    }]);


dashboardServices.factory('Table', ['$resource',
    function($resource){
        return $resource('data/tabledata.json', {}, {
            query: {method:'GET', params:{}, isArray:true}
        });
    }]);