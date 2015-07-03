'use strict';

import 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'jquery';

import appCore from './core/core';

import wizardModule from './states/wizard/wizard';
import mainModule from './states/main/main';

import directivesModule from './directives/directives';

var application = angular.module('polygant', [
    'ngAnimate',
    'ui.router',

    appCore.name,
    wizardModule.name,
    mainModule.name,
    directivesModule.name
]);

angular.element(document).ready(function () {
    angular.bootstrap(document, [application.name]);
});