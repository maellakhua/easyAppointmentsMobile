angular.module('starter.time', ['ionic-timepicker'])

.controller('TimeCtrl', function($scope, $stateParams) {
  $scope.timePickerObject = {
 inputEpochTime: ((new Date()).getHours() * 60 * 60),  //Optional
 step: 15,  //Optional
 format: 12,  //Optional
 titleLabel: '12-hour Format',  //Optional
 setLabel: 'Set',  //Optional
 closeLabel: 'Close',  //Optional
 setButtonType: 'button-positive',  //Optional
 closeButtonType: 'button-stable',  //Optional
 callback: function (val) {    //Mandatory
   timePickerCallback(val);
 }
};
 function timePickerCallback(val) {
  if (typeof (val) === 'undefined') {
    console.log('Time not selected');
  } else {
    var selectedTime = new Date(val * 1000);
    console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), ':', selectedTime.getUTCMinutes(), 'in UTC');
  }
}

});
