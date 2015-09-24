angular.module('starter.profile', ['ionic'])

.controller('ProfileCtrl', function($scope, $stateParams) {

		window.localStorage['fname']="Bill";
		window.localStorage['surname']="Charlaftis";
		window.localStorage['email']="it213*@hua.gr";
		window.localStorage['phone']="1234567890";

		$scope.fname=	window.localStorage['fname'];
		$scope.surname=window.localStorage['surname'];
		$scope.email=window.localStorage['email'];
		$scope.phone=window.localStorage['phone'];

	$scope.Submit =function (){

			window.localStorage['fname']=$scope.fname;
			window.localStorage['surname']=$scope.surname;
			window.localStorage['email']=$scope.email;
			window.localStorage['phone']=$scope.phone;

			alert($scope.fname+window.localStorage['fname']+" "+window.localStorage['surname']+" "+window.localStorage['email']+" "+window.localStorage['phone']);
		};

}
);
