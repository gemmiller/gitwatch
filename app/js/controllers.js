/**
 * Created by gmiller on 6/9/14.
 */
var phonecatControllers = angular.module('phonecatControllers', []);
phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
      function($scope, $http) {
            $http.get('phones/phones.json').success(function(data) {
                  $scope.phones = data;
            });
          $scope.orderProp = 'age';
      }]);

    phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
          function($scope, $routeParams) {
                $scope.phoneId = $routeParams.phoneId;
}]);