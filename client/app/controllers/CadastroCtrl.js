angular
    .module('CadastroCtrl', [])
    .controller('CadastroControler', function($scope) {
        this.user = {
            username: '',
            email: '',
            phone: '',
            address: ''
        };
    });