/**
 * Created by gmiller on 6/9/14.
 */
//DONE: Refactor to use controller as syntax
var dashboardControllers = angular.module('dashboardControllers', []);
dashboardControllers
    .controller('DashCtrl', ['Charts', 'Table', '$http',
        function (Charts, Table) {
            this.charts = Charts.query();
            this.tablevalues = Table.query();
        }]);


