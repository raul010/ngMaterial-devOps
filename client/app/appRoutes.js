angular.module('appRoutes', [])
        .config(function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/video', {
                    templateUrl: '../../views/video.html',
                    controller: 'VideoController'
                })
            $locationProvider.html5Mode(true);

});