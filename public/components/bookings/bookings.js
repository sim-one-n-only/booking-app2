/**
 * Created by sim_one_n_only on 4/26/17.
 */
var app = angular.module("bookingApp");

app.controller("bookingCntrl", ["$scope", "$uibModal", "scheduleService", function($scope, scheduleService, ModalService) {
    // activate();
    //
    // function activate() {
    //     scheduleService.getBookings().then(function (response) {
    //         console.log("results", response);
    //     });
    // }

    var $ctrl = this;

    $ctrl.animationsEnabled = true;

    $ctrl.open = function (size) {
        var modalInstance = $uibModal.open ({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'modal.html',
            controller: 'modalInstanceCntrl',
            controllerAs: '$ctrl',
            size: size,
            resolve: {
                items: function () {
                    return "I hope this works!"
                }
            }
        });


        modalInstance.result.then(function (selectedItem) {
            $ctrl.selected = selectedItem;
        }, function () {
            $log.info('modal-component dismissed at: ' + new Date());
        });
    };

    $ctrl.openComponentModal = function () {
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            componenet: 'modalComponent',
            resolve: {
                items: function () {
                    console.log('this works!')
                    $return
                }
            }
        });


        $ctrl.toggleAnimation = function () {
            $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
        };
    }


}])





