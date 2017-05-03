/**
 * Created by sim_one_n_only on 5/2/17.
 */
var app = angular.module("bookingApp");

app.directive("navbar", ["userService", function (userService) {
    return {
        templateUrl: "components/navbar/navbar.html",
        link: function (scope) {
            scope.userService = userService;
            scope.comp
        }
    };
}]);