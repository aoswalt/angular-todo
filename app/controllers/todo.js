/* global app:false */
app.controller("TodoCtrl", function($scope, $http) {
  $scope.title = "Angular Todo!";
  $scope.potato = "";
  $scope.filter2 = "";
  $scope.variableName = "";

  $scope.newTodo = "";
  $scope.taskType = "home";
  $scope.selectedTodo = "nothing";

  // $scope.tasks = [
  //   { name: "Make the bed", type: "home" },
  //   { name: "Eat breakfast", type: "home" },
  //   { name: "Check the network", type: "work" },
  //   { name: "Start up Slack", type: "work" },
  //   { name: "Feed the cat", type: "home" }
  // ];

  // $http({
  //   method: "GET",
  //   url: "/data/tasks.json"
  // }).then(response => {
  //   $scope.tasks = response.data.tasks;
  // });

  $http.get("/data/tasks.json").then(response => {
    $scope.tasks = response.data.tasks;
  });

  $scope.addTodo = function() {
    $scope.tasks.push({ name: $scope.newTodo, type: $scope.taskType });
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
