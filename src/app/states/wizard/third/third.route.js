'use strict';

import template from './third.html!text';

function route($stateProvider) {
    $stateProvider
        .state('wizard.3', {
            url: '/3',
            template: template
        });
}
route.$inject = ['$stateProvider'];

export default route;