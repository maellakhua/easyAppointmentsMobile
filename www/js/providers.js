angular.module('starter.providers', [])

.controller('ProvidersCtrl', function($scope, $stateParams,$http) {

	console.log("in provider");
	console.log($stateParams.serviceId);

		$http({
					method: 'GET',
					url: 'http://83.212.125.194/appointments/api/providers/by_category_id/id/'+$stateParams.serviceId,
					headers: {'Content-type':undefined}
			 }).success(function(data){
				 console.log("Success",data);
				 $scope.availbleServices = data;
				 //localStorage.setItem("service",  services);
				 //alert();
			}).error(function(){
					console.log("Error",error);
			});

});
