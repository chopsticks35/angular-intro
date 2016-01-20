angular.module('intro', []);

angular.module('intro').controller('intro-controller', ['$scope', function($scope) {
    $scope.msg = "hey you";
    $scope.showMessage = function() {
        console.log($scope.msg);
    }
    
    $scope.showH1 = function() {
        $scope.showH1 = "This probably won't work";
    }
    
    $scope.showUL = function() {
        $scope.li1 = 'first';
        $scope.li2 = 'second';
        $scope.li3 = 'third';
    }
}]);