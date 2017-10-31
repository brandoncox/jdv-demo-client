(function () {
    'use strict';

    angular.module('patternfly.app')
        .factory('FedSrvc', Service);

    Service.$inject = ['$http'];

    function Service($http) {

        var methods = {};

        methods.get = function() {
            return $http.get('/odata4/demo-jdv/FedView/combined');
        };

        return methods;
    }
})();

