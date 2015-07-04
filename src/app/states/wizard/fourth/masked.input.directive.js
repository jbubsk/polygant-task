'use strict';

import 'masked.input';

function maskedInput() {
    return {
        link: function (scope, element) {
            element.mask('+7(999)9999999');

        }
    };
}

export default maskedInput;