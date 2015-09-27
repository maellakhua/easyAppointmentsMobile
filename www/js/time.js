angular.module('starter.time', ['ionic-timepicker','ui.router'])

.controller('TimeCtrl', function($scope,$state, $stateParams) {
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
  document.getElementById('available_time').innerHTML = "Test";
  if (typeof (val) === 'undefined') {
    alert('Time not selected');
    $state.go('app.time', {}, { reload: true });
  } else {
    var selectedTime = new Date(val * 1000);
    console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), ':', selectedTime.getUTCMinutes(), 'in UTC');
    $state.go('app.profile', {}, { reload: true });
    localStorage.setItem("appointment_time", selectedTime.getUTCHours(), ':', selectedTime.getUTCMinutes());
  }
}

});
