'use strict';

import applicationConfig from './application.config';
import applicationRun from './application.running';
import constants from './constants';

export default angular.module('app.core', [])
    .constant('IMAGES', constants.images)
    .config(applicationConfig)
    .run(applicationRun);
