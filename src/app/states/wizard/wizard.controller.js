'use strict';

class WizardController {
    constructor($state) {
        this.$state = $state;
        this.title = 'Рассчитайте сумму ежемесячного платежа в нескольких банках';
        this.stepTitle = 'Информация о кредите';
        this.stepWord = 'Шаг: ';
        this.btnContinue = 'Продолжить';
        this.steps = 3;
        this.model = {
            age: '',
            name: '',
            creditAmount: '',
            creditTerm: ''
        };
    }

    close() {
        this.$state.go('main');
    }

    next() {
        this.$state.go('wizard.' + parseInt(this.currentStep + 1, 10));
    }

    setCurrentStep(step) {
        this.currentStep = step;
    }
}
WizardController.$inject = ['$state'];

export default WizardController;
