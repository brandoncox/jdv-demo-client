(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('NavCtrl', Controller);

    Controller.$inject = ['$rootScope', 'NotifySrvc'];

    function Controller($rootScope, NotifySrvc) {
        var $ctrl = this;

        $ctrl.navItems = [{
            title: "Postgres",
            iconClass: "fa fa-database",
            uiSref: "postgres"
        }, {
            title: "REST",
            iconClass: "fa fa-code",
            uiSref: "rest"
        }, {
            title: "Excel",
            iconClass: "fa fa-file-excel-o",
            uiSref: "excel"
        }, {
            title: "Federated",
            iconClass: "fa fa-handshake-o",
            uiSref: "federated"
        }];

        // Notifications
        $ctrl.notifications = NotifySrvc.data;
        $ctrl.menuItems = [];

        $ctrl.clear = function () {
            NotifySrvc.clear();
            refresh();
        };

        $ctrl.getClass = function (type) {
            switch (type) {
                case 'success':
                    return 'pficon-ok';
                case 'warning':
                    return 'pficon-warning-triangle-o';
                case 'danger':
                    return 'pficon-error-circle-o';
                default:
                    return 'pficon-info';
            }
        };

        $rootScope.$on('notificiation.new', function () {
            refresh();
        });

        function refresh() {
            $ctrl.menuItems = NotifySrvc.notifications;
            $ctrl.notifyCount = $ctrl.menuItems.length;
        }

    }
})();