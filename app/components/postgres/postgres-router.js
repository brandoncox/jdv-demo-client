(function() {
    'use strict';

    angular.module('patternfly.app')
        .config(Router);

    Router.$inject = ['$stateProvider'];

    function Router($stateProvider) {
        $stateProvider
            .state({
                name: 'postgres',
                url:'/postgres',
                component: 'appPostgres',
                ncyBreadcrumb: {
                    label: 'Postgres',
                    parent: 'home'
                }
            });

    }
})();
