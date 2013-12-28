(function() {
   var services = angular.module('listAppServices', []);

   services.factory('ListService', function($http) {
      var _all = function(callback) { 
         $http.get('data.json').success(callback);
      };

      return { all: _all };
   });
})();
