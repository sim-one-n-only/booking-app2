/**
 * Created by sim_one_n_only on 4/26/17.
 */
var app = angular.module("bookingApp.Auth");

app.controller("loginCntrl", ["$scope", "$location", "userService", function ($scope, $location, userService) {

    $scope.login = function (user) {
        userService.login(user).then(function (response) {
            $location.path("/home");
        }, function (response) {
            alert(response.data.message);
        });
    };

    $scope.companyLogin = function () {
        $location.path('/company-login');
    };
}]);