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
   });
});
