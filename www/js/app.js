// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','uiGmapgoogle-maps'])

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

.config(['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {

}])

.controller('MapsCtrl',['$scope','$ionicLoading',
  function($scope,$ionicLoading){

    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 15 };

      $ionicLoading.show({
        template: 'Loading...'
      });

    navigator.geolocation.getCurrentPosition(function(pos) {
      
      $ionicLoading.hide();
      $scope.map = { center: { latitude: pos.coords.latitude, longitude: pos.coords.longitude }, zoom: 15 };
      $scope.$apply()

    }, function(error) {

      $ionicLoading.hide();
      alert('Unable to get location: ' + error.message);
      
    });

}])