'use strict';

function route($stateProvider) {
    $stateProvider
        .state('main', {
            url: '/main',
            template: ''
        });
}
route.$inject = ['$stateProvider'];

export default route;