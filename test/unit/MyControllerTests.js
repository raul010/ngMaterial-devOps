/**
 * Created by raul on 15/10/15.
 */
describe('MyController', function(){
    beforeEach(module('my-module'));

    var $controller;
    var $httpBackend;

    beforeEach(inject(function(_$controller_, _$httpBackend_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
    }));

    describe('getFullName()', function(){
        it('should handle names correctly', function(){
            var myController = $controller('MyController');

            myController.firstName = 'George';
            myController.lastName = 'Harrison';

            expect(myController.getFullName()).toEqual('George Harrison');
        });
    });

    describe('addSong()', function(){
        it('should add songs', function() {
            var scope = {};
            var myController = $controller('MyControllerScope', {
                $scope: scope
            });

            scope.addSong('While My Guitar Gently Weeps');

            expect(scope.songs).toContain('While My Guitar Gently Weeps');
        });
    });

    describe('get-instruments result', function(){
        it('should be added to scope', function(){
            var scope = {};
            $httpBackend
                    .when('GET', 'api/get-instruments')
                    .respond([
                        'vocals', 'guitar', 'sitar'
                    ]);
            var myController = $controller('MyControllerMockHttp', {
                $scope: scope
            });

            $httpBackend.flush();

            expect(scope.instruments).toContain('guitar');

        });
    });

    describe('get-instruments with error', function(){
        it('should have a status with error', function(){
            var scope = {};
            $httpBackend
                    .when('GET', 'api/get-instruments')
                    .respond(500, '');
            var myController = $controller('MyControllerHttpErrors', {
                $scope: scope
            });

            $httpBackend.flush();

            expect(scope.status).toEqual('ERROR');
        });
    });

});
