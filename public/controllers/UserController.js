var app = angular.module('SANOSIP');

app.controller('UserController', function($scope, $http){
    
    if(localStorage['User-Data']){
        $scope.loggedIn = true;
    }else{
        $scope.loggedIn = false;
    }

    $scope.loginUser = function(){
        console.log("loginUser func");
        $http.post('user/login', $scope.login).success(function(response){
            localStorage.setItem('User-Data', JSON.stringify(response));
            $scope.loggedIn = true;
        }).error(function(error){
            console.log(error);
        });
    }
    
    $scope.signUp = function(){
        $http.post('user/signup', $scope.newUser).success(function(response){
            
        }).error(function(error){
            console.log(error);
        });
    }
    
})