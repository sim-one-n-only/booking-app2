/**
 * Created by sim_one_n_only on 5/3/17.
 */
var app = angular.module("bookingApp.Auth");

app.controller("companySignupCntrl", ["$scope", "$location", "companyService", function ($scope, $location, companyService) {
    $scope.passwordMessage = "Passwords must match!";

    $scope.signup = function (company) {
        if(company.password !== $scope.passwordRepeat) {
            $scope.passwordMessage = "Passwords do not match!";
        } else {
            companyService.signup(company).then(function (response) {
                $location.path("/login");
            }, function (response) {
                alert("There was a problem: " + response.data);
            });
        }
    };

}]);