'use strict';

function onApplicationConfig($injector) {
    var $locationProvider = $injector.get('$locationProvider'),
        $urlRouterProvider = $injector.get('$urlRouterProvider');

    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    });

    $urlRouterProvider.otherwise('/main');

}
onApplicationConfig.$inject = ['$injector'];

export default onApplicationConfig;
