(function() {
   var controllers = angular.module('listAppControllers', []);

   controllers.controller('ListCtrl', ['$scope', 'ListService', function($scope, listService) {
      $scope.todoList = listService.all();

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
   }]);
})();
