angular.module('starter.calendar', ['ionic', 'ionic-datepicker','angular-datepicker'])

.controller('CalendarCtrl', function($scope, $stateParams) {
  $scope.currentDate = new Date();


$scope.datePickerCallback = function (val) {
    var nextPage = '';
    if (!val) {
        console.log('Date not selected',val);
        alert("You didn't select a date");
    } else {
        console.log('Selected date is : ', val);
        alert(val);
        if($scope.currentDate > val){
            alert("This date is unavailble..");
        }else{
            //nextPage = 'href="#/app/time"';
        }
    }
};
});
