/**
 * Created by gmiller on 6/9/14.
 */
//DONE: Refactor to use controller as syntax
var dashboardControllers = angular.module('dashboardControllers',[]);
dashboardControllers
    .controller('DashCtrl', ['Charts','Table','$http',
        function(Charts,Table,$http) {
            var self = this;
            this.charts = Charts.query();
            this.tablevalues = Table.query();
        }]);


