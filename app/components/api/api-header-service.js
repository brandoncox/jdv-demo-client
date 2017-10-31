(function () {
    'use strict';

    angular.module('patternfly.app')
        .factory('ApiHeaderSrvc', Service);

    Service.$inject = ['$base64'];

    function Service($base64) {

        var user = 'teiidUser';
        var pass = 'Password1!';
        var methods = {};

        methods.request = function (config) {
            config.headers = config.headers || {};
            config.headers.Authorization = 'Basic ' + $base64.encode(user + ':' + pass)
            return config;
        };

        return methods;
    }
})();