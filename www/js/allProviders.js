angular.module('starter.allProviders', [])

.controller('AllProvidersCtrl', function($scope, $stateParams,$http) {

	var prvName;
	var dataArray=[];
	$scope.showme=[];
	// $scope.showme.fill(false);

	console.log("In all providers");

		$http({
					method: 'GET',
					url: 'http://83.212.125.194/appointments/api/providers/all',
					headers: {'Content-type':undefined}
			 }).success(function(data){
				 console.log("Success",data);
				  $scope.availbleServices= data;
					dataArray = data;
			}).error(function(){
					console.log("Error",error);
			});

			for(var i=0;i<dataArray.length;i++){
					$scope.showme[i]=false;
			}

			$scope.show =function (whichHide){

				//$scope.showme.fill(false);
				$scope.showme[whichHide]=true;
				$scope.showme[prvName]=false;
				prvName=whichHide;

			}

});
