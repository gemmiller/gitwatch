/**
 * Created by gmiller on 6/10/14.
 */
angular.module('dashboardApp')
    .directive('pieChart', function() {

    function link(scope, element, attrs) {
            nv.addGraph(function() {
                var chart = nv.models.pieChart()
                        .x(function(d) { return d.label })
                        .y(function(d) { return d.value })
                        .showLabels(true)     //Display pie labels
                        .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
                        .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
                        .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
                        .donutRatio(0.35)     //Configure how big you want the donut hole size to be.
                    ;

                d3.select(element[0])
                    .datum(scope.chart.data)
                    .transition().duration(350)
                    .call(chart);

                return chart;
            });
    }

    return {
        scope:{
          chart:"=pieChart"
        },
        link: link
    };
});