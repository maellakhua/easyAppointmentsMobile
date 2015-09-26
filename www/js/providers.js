var dataArray;
angular.module('starter.providers', [])

.controller('ProvidersCtrl', function($scope, $stateParams,$http) {

	console.log("In providers");

		$http({
					method: 'GET',
					url: 'http://83.212.125.194/appointments/api/providers/by_category_id/id/'+$stateParams.serviceId,
					headers: {'Content-type':undefined}
			 }).success(function(data){
				 console.log("Success",data);
				 $scope.availableProviders = data;
				 dataArray = data;
			}).error(function(){
					console.log("Error",error);
			});
});

	function saveData(){
		
	document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || text.innerText;
	alert(target);   
}, false);
		
		localStorage.setItem("category_name",  dataArray[0].category_name);
		localStorage.setItem("provider_id",  dataArray[0].provider_id);
		localStorage.setItem("provider_name",  dataArray[0].provider_name);

	};
