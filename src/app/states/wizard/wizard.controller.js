'use strict';

class WizardController {
    constructor($state) {
        this.$state = $state;
        this.title = 'Рассчитайте сумму ежемесячного платежа в нескольких банках';
        this.stepTitle = '';
        this.stepWord = 'Шаг: ';
        this.btnContinue = 'Продолжить';
        this.steps = 4;
        this.currentStep = 1;
        this.model = {
            age: '',
            name: '',
            email: '',
            phone: '',
            citizenship: 'yes',
            debts: '',
            creditAmount: '',
            creditTerm: '',
            registration: '',
            livePlace: '',
            workExperience: '',
            outcome: ''
        };
    }

    close() {
        this.$state.go('main');
    }

    next() {
        var isValid = true;
        if (typeof this.validate === 'function' && !this.validate(this.model)) {
            isValid = false;
        }
        if (isValid) {
            if (this.currentStep < 4) {
                this.$state.go('wizard.' + parseInt(this.currentStep + 1, 10));
            } else {
                alert(JSON.stringify(this.model));
            }
        }
    }

    setCurrentStep(step) {
        this.currentStep = step;
    }

    setStepTitle(title) {
        this.stepTitle = title;
    }
}
WizardController.$inject = ['$state'];

export default WizardController;
