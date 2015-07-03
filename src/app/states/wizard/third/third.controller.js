'use strict';

class WizThirdController {
    constructor($scope) {
        this.$scope = $scope;
        this.name = 'Ф.И.О.';
        this.error = '';
        this.parent = $scope.wiz;
        this.parent.setCurrentStep(3);
    }

    validate() {
        if (this.parent.model.name.trim().length > 0) {
            alert('С вами свяжется наш оператор.' +
            '\nВаши данные:' +
            '\n'+JSON.stringify(this.parent.model));
        } else {
            this.error = 'Заполните, пожалуйста, поле';
        }
    }
}
WizThirdController.$inject = ['$scope'];

export default WizThirdController;
