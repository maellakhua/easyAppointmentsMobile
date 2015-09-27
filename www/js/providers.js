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
	var index;	
	document.addEventListener('click', function(e) {
    	e = e || window.event;
   	 var target = e.target || e.srcElement,
        text = target.textContent || text.innerText;
	for(i=0;i<dataArray.length;i++){
		var name = dataArray[i].provider_name;
		if(text.indexOf(name) > -1){
			index = i;
			localStorage.setItem("category_name",  dataArray[index].category_name);
			localStorage.setItem("category_id",  dataArray[index].category_id);
			localStorage.setItem("provider_id",  dataArray[index].provider_id);
			localStorage.setItem("provider_name",  dataArray[index].provider_name);		
		}
	} 

}, false);
		
		

	};
