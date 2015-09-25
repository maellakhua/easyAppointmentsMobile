angular.module('starter.calendar', ['ionic', 'ionic-datepicker','angular-datepicker'])

.controller('CalendarCtrl', function($scope, $stateParams) {
  $scope.currentDate = new Date();


$scope.datePickerCallback = function (val) {
    if (!val) {
        console.log('Date not selected',val);
    } else {
        console.log('Selected date is : ', val);
    }
};
});
