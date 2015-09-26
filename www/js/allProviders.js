angular.module('starter.allProviders', [])

.controller('AllProvidersCtrl', function($scope, $stateParams,$http) {

	console.log("in provider");
	console.log($stateParams.serviceId);

		$http({
					method: 'GET',
					url: 'http://83.212.125.194/appointments/api/providers/all',
					headers: {'Content-type':undefined}
			 }).success(function(data){
				 console.log("Success",data);
				 $scope.availbleServices = data;
			}).error(function(){
					console.log("Error",error);
			});

});
