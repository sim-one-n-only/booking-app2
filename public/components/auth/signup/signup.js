/**
 * Created by sim_one_n_only on 4/26/17.
 */
var app = angular.module("bookingApp.Auth");

app.controller("signupCntrl", ["$scope", "$location", "userService", function ($scope, $location, userService) {
    $scope.passwordMessage = "Passwords must match!";

    $scope.signup = function (user) {
        if(user.password !== $scope.passwordRepeat) {
            $scope.passwordMessage = "Passwords do not match!";
        } else {
            userService.signup(user).then(function (response) {
                // $location.href = "#/login";
                $location.path("/login");
            }, function (response) {
                alert("There was a problem: " + response.data);
            });
        }
    };

    $scope.companySignup = function () {
        $location.path('/company-signup');
    };
}]);