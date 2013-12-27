(function() {
   var services = angular.module('listAppServices', []);

   services.factory('ListService', function() {
      return {
         all: function() { return [
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
         ]; }
      };
   });
})();
