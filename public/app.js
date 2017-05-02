var app = angular.module("bookingApp", ["ngRoute", "bookingApp.Auth", "ngAnimate", "ngSanitize", "ngMaterial", "materialCalendar", "ui.bootstrap"]);

app.controller("mainCntrl", ["$scope", function ($scope) {


}])


app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

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
        })

}])

