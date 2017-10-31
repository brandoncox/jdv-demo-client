(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('RestCtrl', Controller);

    Controller.$inject = ['NotifySrvc', 'RestSrvc'];

    function Controller(NotifySrvc, RestSrvc) {
        var $ctrl = this;

        $ctrl.name = 'REST Data';

        $ctrl.items = [];

        $ctrl.reload = function () {
            RestSrvc.get()
                .then(function (resp) {
                    $ctrl.items = resp.data.value;
                    NotifySrvc.success('Successfully loaded REST data');
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
            {header: 'ID', itemField: 'id'},
            {header: 'Name', itemField: 'name'},
            {header: 'Username', itemField: 'username'},
            {header: 'Email', itemField: 'email'},
            {header: 'Phone', itemField: 'phone'},
            {header: 'Website', itemField: 'website'},
            {header: 'Street', itemField: 'street'},
            {header: 'City', itemField: 'city'},
            {header: 'Zip', itemField: 'zipcode'}
        ];

        $ctrl.config = {
            selectionMatchProp: 'id',
            itemsAvailable: true,
            showCheckboxes: false
        };

    }
})();
