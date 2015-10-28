angular
    .module('LoginCtrl', [])

    .controller('LoginControler', function($scope) {
        this.user = {
            username: '',
            email: '',
            phone: '',
            address: ''
        };
    });