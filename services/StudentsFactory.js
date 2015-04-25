classRoster.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [{ name: "Sam Schmidt", signIn: false },
  { name: "Jessica Martin",signIn: false },
  { name: "Sandy Smith", signIn: false },
  { name: "Ryan Samuels", signIn:false },
  { name: "Brentwood Davis", signIn:false }];



  return factory;

});

// how to add method to click who signed-in? 
