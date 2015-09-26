angular.module('starter.services', [])

.controller('ServicesCtrl', function($scope, $stateParams,$http) {
	console.log("In service");

		$http({
		        method: 'GET',
		        url: 'http://83.212.125.194/appointments/api/services/categories',
		        headers: {'Content-type':undefined}
		     }).success(function(data){
					 console.log("Success",data);
					 $scope.availableServices = data;
		    }).error(function(){
		        console.log("Error",error);
		    });
});
