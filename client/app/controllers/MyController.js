/**
 * Created by raul on 15/10/15.
 */

angular.module('my-module', []);

angular
    .module('my-module')
    .controller('MyController', [
        function(){
            var self = this;

            self.firstName = '';
            self.lastName = '';

            self.getFullName = function(){
                return self.firstName + ' ' + self.lastName;
            };

            return self;
        }
    ])

    .controller('MyControllerScope', [
        '$scope',
        function($scope){
            var self = this;

            $scope.songs = [
                'Here Comes The Sun'
            ];

            $scope.addSong = function(song) {
                $scope.songs.push(song);
            };

            return self;
        }
    ])

    .controller('MyControllerMockHttp', [
        '$scope', '$http',
        function($scope, $http){
            var self = this;

            // ...

            $scope.instruments = ['foo'];

            $http.get('api/get-instruments')
                    .success(function(data) {
                        $scope.instruments = data;
                    });

            return self;
        }
    ])

    .controller('MyControllerHttpErrors', [
        '$scope', '$http',
        function($scope, $http){
            var self = this;

            // ...

            $scope.instruments = ['foo'];
            $scope.status = '';

            $http.get('api/get-instruments')
                    .success(function(data) {
                        $scope.instruments = data;
                    })
                    .error(function(e) {
                        $scope.status = 'ERROR';
                    });

            return self;
        }
    ]);
