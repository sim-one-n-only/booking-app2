/**
 * Created by sim_one_n_only on 5/2/17.
 */
var app = angular.module("bookingApp");

app.controller("logoutCntrl", ["userService", function (userService) {
    userService.logout();
}])