/**
 * Created by sim_one_n_only on 4/28/17.
 */
var app = angular.module("bookingApp");

app.controller("modalInstanceCntrl", ["$scope", "$uibModalInstance", "bookingForm", function ($scope, $uib$ModalInstance, bookingForm) {
    $scope.form = {};

    $scope.submitForm = function () {
        if ($scope.form.userForm.$valid) {
            console.log('user form is in scope');
            $uibModalInstance.close('closed');
        } else {
            console.log('userform is not in scope');
        }
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

}

])
