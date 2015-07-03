'use strict';

class WizSecondController {
    constructor($scope) {
        this.$scope = $scope;
        this.ageTitle = 'Возраст';
        this.parent = $scope.wiz;
        this.error = '';
        this.parent.setCurrentStep(2);
    }

    validate() {
        var age = this.parent.model.age;

        age = parseInt(age, 10);
        if (typeof  age === 'number' && age > 0) {
            if (age < 18 || age > 60) {
                this.error = 'Возраст должен быть от 18 до 60';
            } else {
                this.parent.next();
            }
        } else {
            this.error = 'Возраст должен быть от 18 до 60';
        }
    }

    hideError() {
        this.error = '';
    }
}
WizSecondController.$inject = ['$scope'];

export default WizSecondController;
