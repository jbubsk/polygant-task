'use strict';

import template from './first.html!text';

function homeRoute($stateProvider) {
    $stateProvider
        .state('wizard.1', {
            url: '/1',
            template: template
        });
}
homeRoute.$inject = ['$stateProvider'];

export default homeRoute;