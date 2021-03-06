var app = angular.module("bookingApp", ["ngRoute", "bookingApp.Auth", "bookingApp.companyAuth", "ngAnimate", "ngSanitize", "ngMaterial", "materialCalendar", "ui.bootstrap"]);

app.controller("mainCntrl", ["$scope", function ($scope) {


}]);


app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "homeCntrl"
        })

        .when("/bookings", {
            templateUrl: "components/bookings/bookings.html",
            controller: "bookingCntrl"
        })

        .when("/calendar", {
            templateUrl: "components/calendar/calendar.html",
            controller: "calendarCntrl"
        })

        .otherwise({
            redirectTo: "/home"
        });

}]);