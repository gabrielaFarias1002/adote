angular.module('app')
    .controller('AdoteListController', AdoteListController);

AdoteListController.$inject = ['AdoteService'];

function AdoteListController(AdoteService){
    var vm = this;
    vm.adote = [];

    function _load() {
        AdoteService.findAll()
            .then(function (dados) {
                vm.adote = dados;
            });
    }
    _load();

    vm.excluir = function (id) {
        if (confirm('Deseja realmente excluir?')) {
            AdoteService.remove(id)
                .then(function() {
                    _load();
                });
        }
    }
}