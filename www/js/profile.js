angular.module('starter.profile', ['ionic','ui.router'])

.controller('ProfileCtrl', function($scope,$state, $stateParams) {

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

			$state.go('app.services', {}, { reload: true })
		};	

}
);
