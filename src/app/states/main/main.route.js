'use strict';

function mainRoute($stateProvider) {
    $stateProvider
        .state('main', {
            url: '/main',
            template: ''
        });
}
mainRoute.$inject = ['$stateProvider'];

export default mainRoute;