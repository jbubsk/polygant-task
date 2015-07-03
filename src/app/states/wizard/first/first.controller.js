'use strict';

class WizFirstController{
    constructor($scope) {
        this.$scope = $scope;
        this.creditSum = 'Сумма кредита:';
        this.inCurrency = '(рублей)';

        this.creditTerm = 'Срок кредитования:';
        this.inMonthes = '(месяцев)';
        $scope.wiz.setCurrentStep(1);
    }

    validate() {
        // do some validation and if valid then
        this.$scope.wiz.next();
    }
}
WizFirstController.$inject = ['$scope'];

export default WizFirstController;