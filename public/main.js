angular.module('app', [
    'ui.router'
]);

angular.module('app').config(ConfigMain);

ConfigMain.$inject = ['$stateProvider'];

function ConfigMain ($stateProvider) {
    $stateProvider
        .state({
            name: 'clienteList',
            url: '/clientes',
            templateUrl: '/partials/clientes/list.html',
            controller: 'ClienteListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'clienteNovo',
            url: '/clientes/novo',
            templateUrl: '/partials/clientes/form.html',
            controller: 'ClienteFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'clienteEditar',
            url: '/clientes/:id',
            templateUrl: '/partials/clientes/form.html',
            controller: 'ClienteFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'animalList',
            url: '/animal',
            templateUrl: '/partials/animal/list.html',
            controller: 'AnimalListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'animalNovo',
            url: '/animal/novo',
            templateUrl: '/partials/animal/form.html',
            controller: 'AnimalFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'animalEditar',
            url: '/animal/:id',
            templateUrl: '/partials/animal/form.html',
            controller: 'AnimalFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'adoteList',
            url: '/adotes',
            templateUrl: '/partials/adote/list.html',
            controller: 'AdoteListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'adoteNovo',
            url: '/adote/novo',
            templateUrl: '/partials/adote/form.html',
            controller: 'AdoteFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'adoteEditar',
            url: '/adote/:id',
            templateUrl: '/partials/adote/form.html',
            controller: 'AdoteFormController',
            controllerAs: 'vm'
        });
}
