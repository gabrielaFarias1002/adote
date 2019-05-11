angular.module('app')
    .controller('AnimalListController', AnimalListController);

AnimalListController.$inject = ['AnimalService'];

function AnimalListController(AnimalService){
    var vm = this;
    vm.animal = [];

    function _load() {
        AnimalService.findAll()
            .then(function (dados) {
                vm.animal = dados;
            });
    }
    _load();

    vm.excluir = function (id) {
        if (confirm('Deseja realmente excluir?')) {
            AnimalService.remove(id)
                .then(function() {
                    _load();
                });
        }
    }
}