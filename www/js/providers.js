var dataArray;

angular.module('starter.providers', [])

.controller('ProvidersCtrl', function($scope, $stateParams,$http) {

	if(!window.localStorage["category_name_0"]){
		localStorage.setItem("numOfInserts",0);
	}

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
	window.localStorage["numOfInserts"]=(parseInt(window.localStorage["numOfInserts"])+1);
	document.addEventListener('click', function(e) {
    	e = e || window.event;
   	 	var target = e.target || e.srcElement,
        text = target.textContent || text.innerText;
			for(i=0;i<dataArray.length;i++){
				var name = dataArray[i].provider_name;
				if(text.indexOf(name) > -1){
					index = i;
					localStorage.setItem("category_name_"+window.localStorage["numOfInserts"],  dataArray[index].category_name);
					localStorage.setItem("category_id_"+window.localStorage["numOfInserts"],  dataArray[index].category_id);
					localStorage.setItem("provider_id_"+window.localStorage["numOfInserts"],  dataArray[index].provider_id);
					localStorage.setItem("provider_name_"+window.localStorage["numOfInserts"],  dataArray[index].provider_name);
				}
			}

}, false);



	};
