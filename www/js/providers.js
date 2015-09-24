angular.module('starter.providers', [])

.controller('ProvidersCtrl', function($scope, $stateParams) {

	console.log("in provider");

	var servicesList = '<ul class="list">';
    var i;
    for(i = 0; i < availbleServices.length; i++) {
        servicesList += '<li class="item">' + availbleServices[i].serviceName + '</li>';
    }
		servicesList += '<ul>';

    document.getElementById("myProviders").innerHTML = servicesList;

});
