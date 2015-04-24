classRoster.controller('SignInCtrl', function SignInCtrl($scope, SignInFactory) {
  $scope.sign-in = SignInFactory.sign-in;
  $scope.SignInFactory = SignInFactory;
});
