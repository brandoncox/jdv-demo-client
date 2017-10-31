(function () {
    'use strict';

    angular.module('patternfly.app')
        .factory('ExcelSrvc', Service);

    Service.$inject = ['$http'];

    function Service($http) {

        var methods = {};

        methods.get = function() {
            return $http.get('/odata4/demo-jdv/ExcelView/Sheet1');
        };

        return methods;
    }
})();

