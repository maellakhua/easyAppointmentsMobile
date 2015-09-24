angular.module('starter.services', [])

.controller('ServicesCtrl', function($scope, $stateParams) {

	var servicesList = '<ul class="list">';
    var i;
    for(i = 0; i < availbleServices.length; i++) {
        servicesList += '<li class="item item-toggle">' + availbleServices[i].serviceName + '<label class="toggle toggle-assertive"><input type="checkbox"><div class="track"><div class="handle"></div></div></label></li>';
    }
    servicesList += '<ul>';
    document.getElementById("myServices").innerHTML = servicesList;
	
});

