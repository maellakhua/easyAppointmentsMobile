angular.module('starter.profile', ['ionic'])

.controller('ProfileCtrl', function($scope, $stateParams) {

	var fname=window.localStorage['name'];
	var surname=window.localStorage['surname'];
	var email=window.localStorage['email'];
	var phone=window.localStorage['phone'];


	if(fname){
		$scope.fname=name;
	}else{
		$scope.fname="Name";
	}if(surname){
		$scope.surname=surname;
	}else{
		$scope.surname="surname";
	}if(email){
		$scope.email=email;
	}else{
		$scope.email="mail";
	}if(phone){
		$scope.phone=phone;
	}else{
		$scope.phone="phone";
	}

	$scope.Submit =function (){

			fname=$scope.fname;
			surname=$scope.surname;
			email=$scope.email;
			phone=$scope.phone;

			alert(fname+" "+surname+" "+email+" "+phone);
		};

}
);
