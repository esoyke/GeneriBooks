angular.module('app').controller('mvMainCtrl', function($scope, mvCachedCourses){
    //$scope.myVar = "Hello Angular";
    $scope.courses = mvCachedCourses.query();
});