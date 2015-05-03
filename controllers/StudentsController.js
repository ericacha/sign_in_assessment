//passed in StudentsFactory so they can be accessed outside the scope, without it, will not output the object array of studentss
classRoster.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;

  $scope.signIn = function(student) {
    StudentsFactory.signIn(student);
  };

  $scope.signOut = function(student) {
    StudentsFactory.signOut(student);
  };
});
