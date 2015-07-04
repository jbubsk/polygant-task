'use strict';

import  AbstractWizardController from '../abstract.controller';

class WizFourthController extends AbstractWizardController {
    constructor($scope) {
        super($scope);

        this.getParent().setCurrentStep(4);
        this.getParent().setStepTitle('Информация о заемщике');

        this.nameTitle = 'Ваше имя:';
        this.emailTitle = 'E-mail:';
        this.phoneTitle = 'Мобильный телефон:';
        this.error = '';
    }

    validate(model) {
        alert('С вами свяжется наш оператор.' +
        '\n\nВаши данные:' +
        '\n' + JSON.stringify(model));
    }
}
WizFourthController.$inject = ['$scope'];

export default WizFourthController;
