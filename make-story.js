
var app = angular.module('madLibs');
app.controller("makeStoryController", function($scope, $location, displayStory){
  $scope.form={};
  $scope.setStory = function() {
    console.log($scope.form);
    displayStory.setStory($scope.form);
    $location.path("/story")
  };
});

app.controller("displayStoryController", function($scope, displayStory){
  $scope.showStory= displayStory.getStory();
})
