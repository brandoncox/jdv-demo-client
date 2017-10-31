(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('ExcelCtrl', Controller);

    Controller.$inject = ['NotifySrvc', 'ExcelSrvc'];

    function Controller(NotifySrvc, ExcelSrvc) {
        var $ctrl = this;
        $ctrl.name = 'Excel Data';

        $ctrl.items = [];

        $ctrl.reload = function () {
            ExcelSrvc.get()
                .then(function (resp) {
                    $ctrl.items = resp.data.value;
                    NotifySrvc.success('Successfully loaded excel data');
                })
                .catch(function (err) {
                    NotifySrvc.error(err.status + ', ' + err.statusText);
                });
        };

        $ctrl.$onInit = function() {
            $ctrl.reload();
        }

        $ctrl.pageConfig = {
            pageNumber: 1,
            pageSize: 10,
            pageSizeIncrements: [5, 10, 20]
        };

        $ctrl.columns = [
            {header: 'Row ID', itemField: 'ROW_ID'},
            {header: 'ID', itemField: 'id'},
            {header: 'Region', itemField: 'region'},
            {header: 'Orders', itemField: 'orders'},
            {header: 'Visibility', itemField: 'visibility'}
        ];

        $ctrl.config = {
            selectionMatchProp: 'ROW_ID',
            itemsAvailable: true,
            showCheckboxes: false
        };

    }
})();
