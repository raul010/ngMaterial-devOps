angular.module('SideNavCtrl', [])

        .controller('SideNavControler', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {

            $scope.myEnvironment = $scope;

            this.toggleLeft = buildToggler('left');
            this.toggleRightLogin = buildToggler('right-login');
            this.toggleRightCadastro = buildToggler('right-cadastro');

            /**
             * Build handler to open/close a SideNav; when animation finishes
             * report completion in console
             */
            function buildToggler(navID) {

                var debounceFn =  $mdUtil.debounce(function(){
                    $mdSidenav(navID)
                            .toggle()
                            .then(function () {
                                $log.debug("toggle " + navID.toUpperCase() + " is done");
                            });
                },300);
                return debounceFn;
            }

            this.close = function(side) {
                $mdSidenav(side).close()
                        .then(function () {
                            $log.debug("close " + side.toUpperCase() + " is done");
                        });
            }
        });