angular.module('app')
    .service('AdoteService', AdoteService);

AdoteService.$inject = ['$http']

function AdoteService ($http) {
    var URL = '/adote';

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

    service.update = function (id, adote) {
        return $http.put(URL + '/' + id, adote)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.remove = function (id) {
        return $http.delete(URL + '/' + id);
    }

    service.insert = function (adote) {
        return $http.post(URL, adote)
            .then(function(resp) {
                return resp.data;
            });
    }

}