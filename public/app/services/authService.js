/**
 * Created by Lama on 23.01.2016.
 */
angular.module('authService', [])
    .factory('Auth', function($http, $q, AuthToken){
        var authFactory = {};

        authFactory.login = function(username, paswword){
            return $http.post('api/login/', {
                username: username,
                password: paswword
            })
                .success(function(data){
                    AuthToken.setToken(data.token);
                    return data;
                })
        };

        authFactory.logout = function(){
            AuthToken.setToken();
        };

        authFactory.isLoggedIn = function () {
            if(AuthToken.getToken())
            return true;
            else
            return false;
        };
        
        authFactory.getUSer = function () {
            if(AuthToken.getToken())
                return $http.get('/api/me');
            else
                return $q.reject({
                    message: "User has no token"
                })
        }
        
    })
    .factory('AuthToken', function($window){
        var authFactory = {};

        authFactory.getToken = function(){
            return $window.localStorage.getItem('token');
        };

        authFactory.setToken = function(){
            if(token)
                $window.localStorage.setItem('token', token);
            else
                $window.localStorage.removeItem('token');
        }
    });