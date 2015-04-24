classRoster.factory('SignInFactory', function SignInFactory() {
    var factory = {};
    factory.sign-in= [];
    factory.addStudent = function() {
      factory.sign-in.push({ name: Erica Jet, id: factory.sign-in.length + 1, studentHere: []});

    };

    return factory;
});
