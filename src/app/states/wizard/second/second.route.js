'use strict';

import template from './second.html!text';

function route($stateProvider) {
    $stateProvider
        .state('wizard.2', {
            url: '/2',
            template: template
        });
}
route.$inject = ['$stateProvider'];

export default route;