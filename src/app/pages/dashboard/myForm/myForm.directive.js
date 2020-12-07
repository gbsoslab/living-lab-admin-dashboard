/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .directive('myForm', myForm);

    /** @ngInject */
    function myForm() {
        return {
            restrict: 'E',
            controller: 'MyFormCtrl as ctrl',
            templateUrl: 'app/pages/dashboard/myForm/myForm.html'
        };
    }
})();