/* global app:false */
app.controller("TodoCtrl", function($scope) {
  $scope.title = "Angular Todo!";
  $scope.potato = "";
  $scope.variableName = "";

  $scope.tasks = [
    { name: "Make the bed", type: "home" },
    { name: "Eat breakfast", type: "home" },
    { name: "Check the network", type: "work" },
    { name: "Start up Slack", type: "work" },
    { name: "Feed the cat", type: "home" }
  ];

});
