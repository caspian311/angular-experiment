var listApp = angular.module('listApp', []);

listApp.controller('ListCtrl', function($scope) {
   $scope.todoList = [
      {
         name: 'Item 1',
         description: 'Description of first item',
         age: 3
      },
      {
         name: 'Item 2',
         description: 'Description of second item',
         age: 1
      },
      {
         name: 'Item 3',
         description: 'Description of third item',
         age: 2
      }
   ];


   $scope.foo = function() {
      return $scope.selectedOrderOption.value;
   }

   $scope.orderOptions = [
      {
         value: 'age',
         description: 'Age'
      },
      {
         value: 'name',
         description: 'Alphabetical'
      }
   ];
   $scope.selectedOrderOption = $scope.orderOptions[0].value;

});
