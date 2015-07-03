'use strict';

function bannerDirective($state) {
    return {
        link: function (scope, element) {
            element.on('mouseover', function () {
                if ($state.$current.name === 'main') {
                    $state.go('wizard.1');
                }
            });
        }
    };
}
bannerDirective.$inject = ['$state'];

export default bannerDirective;