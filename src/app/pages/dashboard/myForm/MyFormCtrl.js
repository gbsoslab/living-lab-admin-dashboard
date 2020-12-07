/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('MyFormCtrl', MyFormCtrl);

  /** @ngInject */
  function MyFormCtrl($scope, $firebaseObject) {
      var vm = this;
      $scope.standardSelectItems = [
          {label: '양덕동', value: 'yangduk'},
          {label: '환호동', value: 'hwanho'},
          {label: '장량동', value: 'janglyang'},
          {label: '흥해읍', value: 'heunghae'},
          {label: '이동', value: 'yidong'}

      ];

      vm.area = {};
      vm.area.selected = null;

      $scope.sendMessage = function (sendText) {
        console.log("sendText");
        console.log(sendText);
        console.log("selected");
        console.log(vm.area.selected);
          return firebase.database().ref('messages').push({
              name: '관리자',
              text: sendText,
              topic: vm.area.selected.value
          });
      };
  }
})();