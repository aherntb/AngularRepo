
var app = angular.module("testModule", []);

var MainController = function ($scope, $http) {

    var onUserComplete = function (response) {
        $scope.user = response.data;

        $http.get($scope.user.repos_url).then(onRepos, onError);
    };

    var onError = function (reason) {
        $scope.error = "Could not fetch the data";
    };

    var onRepos = function (response) {

        $scope.repos = response.data;

    };

    $scope.search = function (user) {
        $http.get("https://api.github.com/users/" + user)
            .then(onUserComplete, onError);
    }



    $scope.message = "Hello Angular";
    $scope.userName = "Angular";
    $scope.repoSortOrder = "-stargazers_count";


};

app.controller("MainController", ["$scope", "$http", MainController]);