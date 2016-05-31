/* global app:false */
app.controller("TodoCtrl", function($scope) {
  $scope.title = "Angular Todo!";
  $scope.potato = "";
  $scope.filter2 = "";
  $scope.variableName = "";

  $scope.newTodo = "";
  $scope.selectedTodo = "";

  $scope.tasks = [
    { name: "Make the bed", type: "home" },
    { name: "Eat breakfast", type: "home" },
    { name: "Check the network", type: "work" },
    { name: "Start up Slack", type: "work" },
    { name: "Feed the cat", type: "home" }
  ];

  $scope.addTodo = function() {
    $scope.tasks.push({ name: $scope.newTodo, type: "home" });
    $scope.newTodo = "";
  };

  $scope.removeTodo = function(task) {
    //NOTE(adam): task is the whole object
    const taskIndex = $scope.tasks.indexOf(task);
    if(taskIndex > -1) {
      $scope.tasks.splice(taskIndex, 1);
    }
  };

});
