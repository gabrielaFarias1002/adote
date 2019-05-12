angular.module('app')
    .controller('AdoteFormController', AdoteFormController);

AdoteFormController.$inject = [
    'AdoteService', 
    'ClienteService',
    'AnimalService',
    '$stateParams', 
    '$state'
];

function AdoteFormController (AdoteService, ClienteService, AnimalService, $stateParams, $state){
    var vm = this;
    vm.adote = {};
    vm.titulo = 'Nova adoção';

    vm.clientes = [];
    vm.animal = [];

    ClienteService.findAll()
        .then(function (data) {
            vm.clientes = data;
        });
    AnimalService.findAll()
        .then(function (data) {
            vm.animal = data;
        });

    if ($stateParams.id) {
        vm.titulo = 'Editando adoção';
        AdoteService.findOne($stateParams.id)
            .then(function (data) {
                vm.adote = data;
            });
    }

    vm.save = function() {
        if ($stateParams.id) {
            AdoteService
                .update($stateParams.id, vm.adote)
                .then(function() {
                    $state.go('adoteList');
                });
        } else {
            AdoteService
                .insert(vm.adote)
                .then(function() {
                    $state.go('adoteList');
                });
        }
    }

    vm.addItem = function() {
        vm.adote.itens = vm.adote.itens || [];
        vm.itemSelecionado = {}
        vm.indexSelecionado = null;
    }

    vm.saveItem = function() {
        if (vm.indexSelecionado) {
            vm.adote.itens[vm.indexSelecionado] = vm.itemSelecionado;
        } else {
            vm.adote.itens.push(vm.itemSelecionado);
        }
        
    }
}