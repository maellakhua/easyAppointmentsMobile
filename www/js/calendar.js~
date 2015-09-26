angular.module('starter.calendar', ['ionic', 'ionic-datepicker','angular-datepicker'])

.controller('CalendarCtrl', function($scope, $stateParams) {
  $scope.currentDate = new Date();
var val;

$scope.datePickerCallback = function (val) {
    var nextPage = '';
    if (!val) {
        console.log('Date not selected',val);
        alert("You didn't select a date");
    } else {
        console.log('Selected date is : ', val);
        if($scope.currentDate > val){
            alert("This date is unavailable! \n Please provide new date.");
        }else{
            document.getElementById("time").style.visibility = "visible";
        }
    }
};
});
