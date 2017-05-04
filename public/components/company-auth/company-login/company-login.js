/**
 * Created by sim_one_n_only on 5/3/17.
 */
var app = angular.module("bookingApp.companyAuth");

app.controller("companyLoginCntrl", ["$scope", "$location", "companyService", function($scope, $location, companyService) {
    $scope.login = function (company) {
        companyService.login(company).then(function (response) {
            $location.path("/home");
        }, function (response) {
            alert(response.data.message);
        });
    };


}]);