angular.module('starter.profile', [])

.controller('ProfileCtrl', function($scope, $stateParams) {

	var fname=window.localStorage['name'];
	var surname=window.localStorage['surname'];
	var email=window.localStorage['email'];
	var phone=window.localStorage['phone'];


	if(fname){
		$scope.fname=name;
	}else{
		$scope.fname="Names";
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

}
);
