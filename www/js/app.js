// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tabs', {
          url: "/tab",
          abstract: true,
          templateUrl: "templates/tabs.html"
      })
      .state('tabs.home', {
          url: "/home",
          views: {
              'home-tab': {
                  templateUrl: "templates/home.html",
                  controller:"HomeCtrl"
              }
          }
      })
      .state('tabs.resources', {
          url: "/resources",
          views: {
              'home-tab': {
                  templateUrl: "templates/additionalresources.html"
              }
          }
      })
      .state('tabs.gmetrics', {
          url: "/gmetrics",
          views: {
              'home-tab': {
                  templateUrl: "templates/global-metrics.html"
              }
          }
      })
      .state('tabs.gfeed', {
          url: "/gfeed",
          views: {
              'home-tab': {
                  templateUrl: "templates/3.html"
              }
          }
      })
      .state('tabs.googleforms', {
          url: "/googleforms",
          views: {
              'home-tab': {
                  templateUrl: "templates/4.html"
              }
          }
      })
      .state('tabs.social', {
          url: "/social",
          views: {
              'home-tab': {
                  templateUrl: "templates/5.html"
              }
          }
      });
    /*
    .state('tabs.chapters', {
        url: "/chapters",
        views: {
            'home-tab': {
                templateUrl: "templates/chapters.html"
            }
        }
    });
    */
    $urlRouterProvider.otherwise("/tab/home");

})

.config(['$ionicConfigProvider', function ($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom'); //other values: top
}]);

