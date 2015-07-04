'use strict';

import template from './wizard.html!text';

function route($stateProvider) {
    $stateProvider
        .state('wizard', {
            url: '/wizard',
            template: template
        });
}
route.$inject = ['$stateProvider'];

export default route;