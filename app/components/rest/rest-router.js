(function() {
    'use strict';

    angular.module('patternfly.app')
        .config(Router);

    Router.$inject = ['$stateProvider'];

    function Router($stateProvider) {
        $stateProvider
            .state({
                name: 'rest',
                url:'/rest',
                component: 'appRest',
                ncyBreadcrumb: {
                    label: 'Rest',
                    parent: 'home'
                }
            });

    }
})();
