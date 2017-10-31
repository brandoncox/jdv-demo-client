(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('FedCtrl', Controller);

    Controller.$inject = ['NotifySrvc', 'FedSrvc', '$filter'];

    function Controller(NotifySrvc, FedSrvc, $filter) {
        var $ctrl = this;

        $ctrl.name = 'Federated Data';

        $ctrl.reload = function () {
            $ctrl.items = [];
            FedSrvc.get()
                .then(function (resp) {
                    $ctrl.items = resp.data.value;
                    NotifySrvc.success('Successfully loaded federated data');
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
            {header: 'Name', itemField: 'id'},
            {header: 'Region', itemField: 'region'},
            {header: 'Visibility', itemField: 'visibility'},
            {header: 'Orders', itemField: 'orders'},
            {
                header: 'Cost',
                itemField: 'cost',
                templateFn: function (value) {
                    return $filter('currency')(value)
                }
            },
            {header: 'Updated', itemField: 'lastupdatedate'},
            {header: 'Name', itemField: 'name'},
            {header: 'Website', itemField: 'website'},
            {header: 'Phone', itemField: 'phone'},
            {header: 'Email', itemField: 'email'},
            {header: 'Username', itemField: 'username'},
            {header: 'Street', itemField: 'street'},
            {header: 'City', itemField: 'city'},
            {header: 'Zip', itemField: 'zipcode'},
            {header: 'Status', itemField: 'status'}
        ];

        $ctrl.config = {
            selectionMatchProp: 'id',
            itemsAvailable: true,
            showCheckboxes: false
        };

    }
})();
