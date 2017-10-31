(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('PostgresCtrl', Controller);

    Controller.$inject = ['NotifySrvc', 'PostgresSrvc', '$filter'];

    function Controller(NotifySrvc, PostgresSrvc, $filter) {
        var $ctrl = this;

        $ctrl.name = 'Postgres Data';

        $ctrl.reload = function () {
            $ctrl.items = [];
            PostgresSrvc.get()
                .then(function (resp) {
                    $ctrl.items = resp.data.value;
                    NotifySrvc.success('Successfully loaded Postgres data');
                })
                .catch(function (err) {
                    NotifySrvc.error(err);
                });
        };

        $ctrl.$onInit = function() {
            $ctrl.reload();
        };

        $ctrl.pageConfig = {
            pageNumber: 1,
            pageSize: 10,
            pageSizeIncrements: [5, 10, 20]
        };

        $ctrl.columns = [
            {header: 'ID', itemField: 'id'},
            {
                header: 'Cost',
                itemField: 'cost',
                templateFn: function (value) {
                    return $filter('currency')(value)
                }
            },
            {header: 'Last Updated', itemField: 'lastupdatedate'},
            {header: 'Status', itemField: 'status'}
        ];

        $ctrl.config = {
            selectionMatchProp: 'id',
            itemsAvailable: true,
            showCheckboxes: false
        };

    }
})();
