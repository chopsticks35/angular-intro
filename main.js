//Top level component - module
angular.module('bananaTree', []); //Creating module
angular.module('bananaTree'); //Referencing a created module

//Register a controller to the module
//last argument in dependency injection is a function
//dependencies are all passed as arguments in function
angular.module('bananaTree').controller('bananaTroller', ['$scope', function($scope){
    
    //console.log('hello from the controller');
    $scope.greeting = "sup dude"
    $scope.unicorn = {name: 'fred'};
    
    $scope.showGreeting = function() {
        console.log($scope.greeting);
    }
    $scope.showUnicorn = function() {
        console.log($scope.unicorn.name);
    }
    
}]);