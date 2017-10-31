(function() {
    'use strict';

    angular.module('patternfly.app')
        .config(Router);

    Router.$inject = ['$stateProvider'];

    function Router($stateProvider) {
        $stateProvider
            .state({
                name: 'excel',
                url:'/excel',
                component: 'appExcel',
                ncyBreadcrumb: {
                    label: 'Excel',
                    parent: 'home'
                }
            });

    }
})();
