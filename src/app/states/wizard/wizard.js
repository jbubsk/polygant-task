'use strict';

import WizardController from './wizard.controller';
import wizardRoute from './wizard.route';
import wizFirstModule from './first/first';
import wizSecondModule from './second/second';
import wizThirdModule from './third/third';

export default angular.module('wizard', [
    wizFirstModule.name,
    wizSecondModule.name,
    wizThirdModule.name
])
    .config(wizardRoute)
    .controller('WizardController', WizardController);
