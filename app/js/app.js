var listApp = angular.module('listApp', []);

listApp.controller('ListCtrl', function($scope) {
   $scope.todoList = [
      {
         name: 'Item 1',
         description: 'Description of first item',
      },
      {
         name: 'Item 2',
         description: 'Description of second item',
      },
      {
         name: 'Item 3',
         description: 'Description of third item',
      }
   ];
});
