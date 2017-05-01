/**
 * Created by sim_one_n_only on 4/26/17.
 */
var app = angular.module("bookingApp");


app.controller("calendarCntrl", ["$scope", "scheduleService", "$filter", "$log", "$document", function ($scope, scheduleService, $filter, $log, $document) {


    // activate();
    function activate() {
        scheduleService.getBookings().then(function (response) {
            $scope.events = response;
        });
    }

    $scope.setDayContent = function (date) {

        return scheduleService.getBookings().then(function(data) {
            return "There's an event on this day"
        });


        for (var i = 0; i < $scope.events.length; i++) {
            if (date === $scope.events[i].date) {
                return "<p>There is an event today!</p>"
            }
        }
    }

    $scope.dayFormat = "d";


    $scope.selectedDate = null;
    $scope.firstDayOfWeek = 0;
    $scope.setDirection = function (direction) {
        $scope.direction = direction;
    };
    $scope.dayClick = function (date) {
        $scope.msg = "You clicked " + $filter("date")(date, "MMM d, y h:mm:ss a Z");
        console.log(date);
    };
    $scope.prevMonth = function (data) {
        $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
    };
    $scope.nextMonth = function (data) {
        $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
    };


    // console.log(date);
    // return "<ul><li>Test</li></ul>";
    // if(!content){
    //     content = "<p></p>"
    // }
    // You would inject any HTML you wanted for
    // that particular date here.

    // date = new Date(date);
    // date = date.toString();
    // console.log(date);


    // return scheduleService.getBookings("/booking/content?date="+date).then(function(response){
    //     if (!response.data){
    //         return '<p>'
    //     }
    //     return '<p>${response.data}</p>';

    // })

    // $scope.setDayContent = function(date) {
    //     scheduleService.getBookings().then(function (response) {
    //
    //
    //         for(var i = 0; i < events.length; i++) {
    //             if(date === events[i].date) {
    //                 console.log("match");
    //             }
    //         }
    //
    //
    //     })
    //
    // };
}]);

