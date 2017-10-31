(function() {
    'use strict';

    angular.module('patternfly.app')
        .config(Router);

    Router.$inject = ['$stateProvider'];

    function Router($stateProvider) {
        $stateProvider
            .state({
                name: 'federated',
                url:'/federated',
                component: 'appFederated',
                ncyBreadcrumb: {
                    label: 'Federated',
                    parent: 'home'
                }
            });

    }
})();
