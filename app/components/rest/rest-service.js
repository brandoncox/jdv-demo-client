(function () {
    'use strict';

    angular.module('patternfly.app')
        .factory('RestSrvc', Service);

    Service.$inject = ['$http'];

    function Service($http) {

        var methods = {};

        methods.get = function() {
            return $http.get('/odata4/demo-jdv/RestView/users');
        };

        return methods;
    }
})();

