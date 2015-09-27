angular.module('starter.profile', ['ionic','ui.router'])

.controller('ProfileCtrl', function($scope,$state,$http,$stateParams) {

		window.localStorage['fname']="";
		window.localStorage['surname']="";
		window.localStorage['email']="";
		window.localStorage['phone']="";

		$scope.fname=	window.localStorage['fname'];
		$scope.surname=window.localStorage['surname'];
		$scope.email=window.localStorage['email'];
		$scope.phone=window.localStorage['phone'];

	$scope.Submit =function (){

			window.localStorage['fname']=$scope.fname;
			window.localStorage['surname']=$scope.surname;
			window.localStorage['email']=$scope.email;
			window.localStorage['phone']=$scope.phone;

		var data = 'first_name='+$scope.fname+'&last_name='+$scope.surname+'&email='+$scope.email+'&phone_number='+$scope.phone;

		$http.post('http://83.212.125.194/appointments/api/customers/add',data)
		.success(function(data, status, headers, config) {
			$scope.message = data;
		}).error(function(data, status, headers, config) {
			alert( "failure message  on customer: " + JSON.stringify({data: data}));
		});

		data = 'service='+localStorage["category_name"]+'&provider='+localStorage["provider_name"]+'&start_datetime='+localStorage["appointment_time"]+'&end_datetime='+localStorage["appointment_time"]+'&user_id='+localStorage["provider_id"];

		$http.post('http://83.212.125.194/appointments/api/appointments/add',data)
		.success(function(data, status, headers, config) {
			$scope.message = data;
		}).error(function(data, status, headers, config) {
			alert( "failure message on appointments: " + JSON.stringify({data: data}));
		});

			$state.go('app.services', {}, { reload: true })
		};

}
);
