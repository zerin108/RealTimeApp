/**
 * Created by Lama on 24.01.2016.
 */
angular.module('appRoutes', ['ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/pages/home.html'
            })
    });