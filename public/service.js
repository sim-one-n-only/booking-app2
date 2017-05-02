/**
 * Created by sim_one_n_only on 4/26/17.
 */
var app = angular.module("bookingApp");

app.service("scheduleService", ["$http", "tokenService", function ($http) {

    this.getBookings = function () {
        return $http.get("/api/booking").then(function(response) {
            for (var i = 0; i < response.data.length; i++) {
                response.data[i].date = new Date(response.data[i].date);
            }
            return response.data;
        });
    };

    this.postBookings = function (newSchedule) {
        return $http.post("/api/booking/", newSchedule).then(function (response) {
            return response.data;
        });
    };

    this.editBooking = function (schedule) {
        return $http.put("/api/booking/", + schedule._id).then(function(response) {
            return response.data;
        });
    };

    this.deleteBooking = function (id) {
        return $http.delete("/api/booking/" + id).then(function (response) {
            return response.data;
        });
    };

    this.getContent = function(date) {
        return $http.get("/api/booking/" + date).then(function (response) {
            return response.data;
        });
    };
}]);