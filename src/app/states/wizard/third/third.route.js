'use strict';

import template from './third.html!text';

function homeRoute($stateProvider) {
    $stateProvider
        .state('wizard.3', {
            url: '/3',
            template: template
        });
}
homeRoute.$inject = ['$stateProvider'];

export default homeRoute;