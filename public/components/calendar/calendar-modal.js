/**
 * Created by sim_one_n_only on 5/3/17.
 */
var app = angular.module("bookingApp");

app.directive("calendarModal", [function () {
    return {
        restrict: "E",
        templateUrl: "components/calendar/calendar-modal.html"
    };
}]);

app.controller("calendarModalInstanceCntrl", ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
    $scope.cancel = function () {
        $uibModalInstance.dismiss('closed');
    };
}]);