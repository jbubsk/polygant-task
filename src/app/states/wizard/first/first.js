'use strict';

import WizFirstController from './first.controller';
import wizFirstRoute from './first.route';
import sliderDirective from './slider.directive';

export default angular.module('home', [])
    .config(wizFirstRoute)
    .directive('slider', sliderDirective)
    .controller('WizFirstController', WizFirstController);
