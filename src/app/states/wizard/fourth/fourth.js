'use strict';

import WizFourthController from './fourth.controller';
import wizFourthRoute from './fourth.route';
import maskedInputDirective from './masked.input.directive';

export default angular.module('fourth', [])
    .config(wizFourthRoute)
    .directive('maskedInput', maskedInputDirective)
    .controller('WizFourthController', WizFourthController);
