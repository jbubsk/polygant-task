'use strict';

import  AbstractWizardController from '../abstract.controller';

class WizFirstController extends AbstractWizardController {
    constructor($scope) {
        super($scope);
        this.creditSum = 'Сумма кредита:';
        this.inCurrency = '(рублей)';

        this.creditTerm = 'Срок кредитования:';
        this.inMonthes = '(месяцев)';

        this.getParent().setCurrentStep(1);
        this.getParent().setStepTitle('Информация о кредите');
    }
}
WizFirstController.$inject = ['$scope', '$state'];

export default WizFirstController;