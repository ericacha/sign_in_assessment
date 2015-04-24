var classRoster = angular.module('classRoster',['ui.router']);

classRoster.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('sign-in', {
    url:"/sign-in",
    templateUrl: "partials/sign-in.html",
    controller: 'SignInCtrl'
  });

});
