'use strict';

export default
class AbstractWizardController {
    constructor($scope) {
        this.$scope = $scope;
        this.parent = $scope.wiz;
        this.parent.validate = this.validate;
    }

    getParent() {
        return this.parent;
    }

    getScope() {
        return this.$scope;
    }

    validate() {
        return true;
    }
}