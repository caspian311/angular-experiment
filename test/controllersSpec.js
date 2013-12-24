describe('listApp controllers', function() {
   beforeEach(module('listApp'));

   beforeEach(inject(function($rootScope, $controller) {
      this.scope = $rootScope.$new();
      this.ctrl = $controller('ListCtrl', {$scope: this.scope});
   }));

   describe('ListCtrl', function() {
      it('should create items with 3 tasks', function() {
         expect(this.scope.todoList.length).toBe(3);
      });

      it('should populate order options', function() {
         expect(this.scope.orderOptions.length).toBe(2);

         expect(this.scope.orderOptions[0].value).toBe('age');
         expect(this.scope.orderOptions[0].description).toBe('Age');

         expect(this.scope.orderOptions[1].value).toBe('name');
         expect(this.scope.orderOptions[1].description).toBe('Alphabetical');
      });
   });
});
