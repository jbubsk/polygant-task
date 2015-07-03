'use strict';

import WizThirdController from './third.controller';
import wizThirdRoute from './third.route';

export default angular.module('third', [])
    .config(wizThirdRoute)
    .controller('WizThirdController', WizThirdController);
