(function () {
    'use strict';

    angular.module('patternfly.app')
        .factory('PostgresSrvc', Service);

    Service.$inject = ['$http'];

    function Service($http) {

        var methods = {};

        methods.get = function() {
            return $http.get('/odata4/demo-jdv/PostgresView/order_details');
        };

        return methods;
    }
})();

