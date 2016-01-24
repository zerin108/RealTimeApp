/**
 * Created by Lama on 24.01.2016.
 */
angular.module('appRoutes', ['ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/pages/home.html'
            })
            .when('/login', {
                templateUrl: 'views/pages/login.html'
            })

        $locationProvider.html5Mode(true);
    });