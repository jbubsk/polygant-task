'use strict';

import banner from './banner.directive';
import watchErrorDirective from './watch.error.directive';

export default angular.module('directives', [])
    .directive('watchError', watchErrorDirective)
    .directive('banner', banner);