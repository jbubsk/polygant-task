'use strict';

import template from './wizard.html!text';

function homeRoute($stateProvider) {
    $stateProvider
        .state('wizard', {
            url: '/wizard',
            template: template
        });
}
homeRoute.$inject = ['$stateProvider'];

export default homeRoute;