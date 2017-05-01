/**
 * Created by sim_one_n_only on 4/26/17.
 */
var app = angular.module("bookingApp");


app.controller("calendarCntrl", ["$scope", "$q", "scheduleService", "$filter", "$log", "$document", function ($scope, $q, scheduleService, $filter, $log, $document) {

    // function activate() {
    //     // var deferred = $q.defer();
    //     return scheduleService.getBookings();
    //     // return deferred.promise;
    // }
    $scope.events = [];
    var prom = scheduleService.getBookings().then(function(data) {
        $scope.events = data;
        return data;
    });
    $scope.setDayContent = function (date) {
        return prom.then(function (data) {
            var output = "";
            for (var i = 0; i < data.length; i++) {
                if (date.toString() === data[i].date.toString()) {
                    output += "<p>" + data[i].companyName + "</p>";
                }
            }
            return output;
        });

    };

    $scope.dayFormat = "d";

    $scope.selectedDate = null;
    $scope.firstDayOfWeek = 0;
    $scope.setDirection = function (direction) {
        $scope.direction = direction;
    };
    $scope.dayClick = function (date) {

        for (var i = 0; i < $scope.events.length; i++) {
            if (date.toString() === $scope.events[i].date.toString()) {
                console.log($scope.events[i].companyName);
            }
        }

        //
        // $scope.events.forEach(function(event) {
        //     if (date.toString() === event.date.toString()) {
        //         console.log(event.companyName);
        //     }
        // });
    };
    $scope.prevMonth = function (data) {
        $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
    };
    $scope.nextMonth = function (data) {
        $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
    };
}])
;

