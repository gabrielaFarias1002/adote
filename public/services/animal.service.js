angular.module('app')
    .service('AnimalService', AnimalService);

AnimalService.$inject = ['$http']

function AnimalService ($http) {
    var URL = '/animal';

    var service = this;

    service.findAll = function () {
        return $http.get(URL)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.findOne = function (id) {
        return $http.get(URL + '/' + id)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.update = function (id, animal) {
        return $http.put(URL + '/' + id, animal)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.remove = function (id) {
        return $http.delete(URL + '/' + id);
    }

    service.insert = function (animal) {
        return $http.post(URL, animal)
            .then(function(resp) {
                return resp.data;
            });
    }

}