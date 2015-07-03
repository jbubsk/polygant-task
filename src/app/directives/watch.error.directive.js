'use strict';

function watchErrorDirective() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {

            scope.$watch(
                function () {
                    return ngModel.$modelValue;
                }, function () {
                    if (typeof scope[attrs.ctrl].hideError === 'function') {
                        scope[attrs.ctrl].hideError();
                    }
                });
        }
    };
}

export default watchErrorDirective;