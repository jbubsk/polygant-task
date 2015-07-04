'use strict';

import  AbstractWizardController from '../abstract.controller';

class WizSecondController extends AbstractWizardController{
    constructor($scope) {
        super($scope);

        this.getParent().setCurrentStep(2);
        this.getParent().setStepTitle('Информация о заемщике');
        this.getParent().validate = this.validate.bind(this);

        this.outstandings = [
            {
                name: 'есть текущие',
                id: 1
            },
            {
                name: 'нет',
                id: 2
            }
        ];
        this.ageTitle = 'Ваш возраст:';
        this.exceededTimeTitle = 'Есть просрочки по кредитам?';
        this.citizenTitle = 'Вы гражданин РФ?';
        this.yesTitle = 'да';
        this.noTitle = 'нет';
        this.error = '';

    }

    validate(model) {
        var age = model.age;

        age = parseInt(age, 10);
        if (typeof  age === 'number' && age > 0) {
            if (age < 18 || age > 60) {
                this.error = 'Возраст должен быть от 18 до 60';
            } else {
                return true;
            }
        } else {
            this.error = 'Возраст должен быть от 18 до 60';
        }
        return false;
    }

    hideError() {
        this.error = '';
    }
}
WizSecondController.$inject = ['$scope'];

export default WizSecondController;
