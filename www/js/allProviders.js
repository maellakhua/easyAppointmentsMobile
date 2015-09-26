angular.module('starter.allProviders', [])

.controller('AllProvidersCtrl', function($scope, $stateParams,$http) {

	var prvName;
	$scope.showme=[];
	$scope.showme.fill(false);
	console.log("in provider");
	console.log($stateParams.serviceId);

		$http({
					method: 'GET',
					url: 'http://83.212.125.194/appointments/api/providers/all',
					headers: {'Content-type':undefined}
			 }).success(function(data){
				 console.log("Success",data);
				  $scope.availbleServices= data;
			}).error(function(){
					console.log("Error",error);
			});

			$scope.show =function (wichHide){

				$scope.showme.fill(false);
				$scope.showme[wichHide]=true;
				$scope.showme[prvName]=false;
				// alert(	wichHide+" "+$scope.showme[wichHide]);
				prvName=wichHide;
				
			}

});
