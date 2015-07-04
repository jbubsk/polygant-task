'use strict';

import template from './first.html!text';

function route($stateProvider) {
    $stateProvider
        .state('wizard.1', {
            url: '/1',
            template: template
        });
}
route.$inject = ['$stateProvider'];

export default route;