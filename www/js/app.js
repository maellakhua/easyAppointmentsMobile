// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ionic-timepicker','starter.profile','starter.services','starter.time','angular-datepicker','starter.providers','starter.calendar','ionic-datepicker','starter.allProviders','starter.appointmemt'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

	.state('app.services', {
      url: '/services',
      views: {
        'menuContent': {
          templateUrl: 'templates/services.html',
	  	  controller: 'ServicesCtrl'
        }
      }
    })

	.state('app.appointmemt', {
      url: '/appointmemt',
      views: {
        'menuContent': {
          templateUrl: 'templates/appointmemt.html',
	  	  controller: 'AppointmemtCtrl'
        }
      }
    })

	.state('app.profile', {
      url: '/services/calendar/time/:time/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html',
	  	  controller: 'ProfileCtrl'
        }
      }
    })

    .state('app.provider', {
        url: '/services/:serviceId',
        views: {
          'menuContent': {
            templateUrl: 'templates/providers.html',
  	  	  controller: 'ProvidersCtrl'
          }
        }
      })

      .state('app.allProviders', {
          url: '/allProviders',
          views: {
            'menuContent': {
              templateUrl: 'templates/allProviders.html',
    	  	  controller: 'AllProvidersCtrl'
            }
          }
        })

      .state('app.calendar', {
          url: '/services/:serviceId/:providerId/calendar',
          views: {
            'menuContent': {
              templateUrl: 'templates/calendar.html',
    	  	  controller: 'CalendarCtrl'
            }
          }
        })

        .state('app.time', {
            url: '/services/calendar/:date/time',
            views: {
              'menuContent': {
                templateUrl: 'templates/time.html',
      	  	  controller: 'TimeCtrl'
              }
            }
          });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/services');
});
