/**
 * Created by Lama on 24.01.2016.
 */
angular.module('mainCtrl', [])
    .controller('MainController', function ($rootScope, $location, Auth) {
        var vm = this;

        //chek if user is logged in
        vm.loggedIn = Auth.isLoggedIn();

        $rootScope.$on('$routeChangeStart', function () {
            vm.loggedIn = Auth.isLoggedIn();

            Auth.getUser()
                .then(function (data) {
                    vm.user = data.data;
                });
        });

        vm.doLogin = function(){
            vm.processing = true;
            vm.error = '';

            Auth.login(vm.data.username, vm.data.password)
                .success(function(data){
                    vm.processing = false;

                    Auth.getUser()
                        .then(function (data) {
                            vm.user = data.data;
                        });

                    if(data.success){
                        $location.path('/')
                    } else {
                        vm.error = data.message;
                    }
                });
        };

        vm.doLogout = function () {
            Auth.logout();
            $location.path('/logout');
        };
    });