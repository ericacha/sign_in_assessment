classRoster.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [{ name: "Sam Schmidt", present: false },
  { name: "Jessica Martin",present: false },
  { name: "Sandy Smith", present: false },
  { name: "Ryan Samuels", present:false },
  { name: "Brentwood Davis", present:false}
  ];

  factory.signIn = function(student) {
    student.present = true;
  };

  factory.signOut = function(student) {
    student.present = false;
  };

  return factory;

});
