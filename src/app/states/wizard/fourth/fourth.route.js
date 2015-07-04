'use strict';

import template from './fourth.html!text';

function route($stateProvider) {
    $stateProvider
        .state('wizard.4', {
            url: '/4',
            template: template
        });
}
route.$inject = ['$stateProvider'];

export default route;