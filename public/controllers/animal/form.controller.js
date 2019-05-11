angular.module('app')
    .controller('AnimalFormController', AnimalFormController);

AnimalFormController.$inject = [
    'AnimalService', 
    '$stateParams', 
    '$state'
];

function AnimalFormController (AnimalService, $stateParams, $state){
    var vm = this;
    vm.animal = {};
    vm.titulo = 'Novo animal';

    if ($stateParams.id) {
        vm.titulo = 'Editando animal';
        AnimalService.findOne($stateParams.id)
            .then(function (data) {
                vm.animal = data;
            });
    }

    vm.save = function() {
        if ($stateParams.id) {
            AnimalService
                .update($stateParams.id, vm.animal)
                .then(function() {
                    $state.go('animalList');
                });
        } else {
            AnimalService
                .insert(vm.animal)
                .then(function() {
                    $state.go('animalList');
                });
        }
    }
}