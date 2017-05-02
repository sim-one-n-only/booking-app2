/**
 * Created by sim_one_n_only on 4/26/17.
 */
var app = angular.module("bookingApp");

app.controller("bookingCntrl", ["$scope", "$uibModal", "$log", "scheduleService", function ($scope, $uibModal, $log, scheduleService) {
    activate();

    $scope.bookings = [];

    function activate() {
        scheduleService.getBookings().then(function (response) {
            console.log("results", response);
            $scope.bookings.push(response);
        });
    }

    $scope.showForm = function () {
        $scope.message = "Show Form Button Clicked";
        console.log($scope.message);
        var modalInstance = $uibModal.open({
            templateUrl: "modal.html",
            controller: "modalInstanceCntrl",
            scope: $scope,
            resolve: {
                bookingForm: function () {
                    return $scope.bookingForm;
                }
            }
        });

        modalInstance.result.then(function (newBooking) {
            $scope.selected = newBooking;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };


}])







