'use strict';

import WizSecondController from './second.controller';
import wizSecondRoute from './second.route';

export default angular.module('wizSecond', [])
    .config(wizSecondRoute)
    .controller('WizSecondController', WizSecondController);
