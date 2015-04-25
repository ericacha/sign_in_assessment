var classRoster = angular.module('classRoster',['ui.router']);

classRoster.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('sign-ins', {
  url: "/sign-ins",
  templateUrl: "partials/sign-ins.html",
  controller: 'StudentsCtrl'
});

  $stateProvider.state('whoIsHere', {
    url:"/whoIsHere",
    templateUrl: "partials/whoIsHere.html",
    controller: 'StudentsCtrl'
  });



});
