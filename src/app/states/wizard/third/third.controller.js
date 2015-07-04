'use strict';

import  AbstractWizardController from '../abstract.controller';

class WizThirdController extends AbstractWizardController{
    constructor($scope) {
        super($scope);

        this.getParent().setCurrentStep(3);
        this.getParent().setStepTitle('Информация о заемщике');

        this.registrationTitle = 'Где Вы зарегистрированы?';
        this.livingTitle = 'Где Вы проживаете?';
        this.workExpTitle = 'Стаж работы:';
        this.outcomeTitle = 'Ваш подтвержденный доход (руб.):';
        this.error = '';

        this.regPlaces = ['Москва, ул. Старославянская, д5', 'Киров, ул. Фрунзе, д11, кв4'];
        this.livPlaces = ['Минск, ул. Победы, д5', 'Иваново, ул. Фрунзе, д41, кв34'];
        this.workExperience = [1,2,3,4,5,6,7,8,9,10];
    }
}
WizThirdController.$inject = ['$scope'];

export default WizThirdController;
