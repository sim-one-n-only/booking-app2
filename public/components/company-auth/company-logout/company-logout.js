/**
 * Created by sim_one_n_only on 5/3/17.
 */
var app = angular.module("bookingApp.companyAuth");

app.controller("companyLogoutCntrl", ["companyService", function (companyService) {
    companyService.logout();
}])