'use strict';

import template from './second.html!text';

function homeRoute($stateProvider) {
    $stateProvider
        .state('wizard.2', {
            url: '/2',
            template: template
        });
}
homeRoute.$inject = ['$stateProvider'];

export default homeRoute;