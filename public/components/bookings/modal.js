/**
 * Created by sim_one_n_only on 4/28/17.
 */
var app = angular.module("bookingApp");

app.directive("bookingModal", [function () {
    return {
        restrict: "E",
        templateUrl: "components/bookings/modal.html"
    };
}]);

app.controller("modalInstanceCntrl", ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
    $scope.form = {};

    $scope.submitForm = function () {
        if ($scope.form.bookingForm.$valid) {
            console.log('user form is in scope');
            $uibModalInstance.close('closed');
        } else {
            console.log('user form is not in scope');
        }
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('closed');
    };
}]);