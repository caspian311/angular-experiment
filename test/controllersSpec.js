(function() {
   describe('listAppControllers', function() {
      beforeEach(module('listAppControllers'));

      beforeEach(inject(function($rootScope, $controller) {
         this.scope = $rootScope.$new();
         this.mockService = { all: jasmine.createSpy() };

         this.ctrl = $controller('ListCtrl', {$scope: this.scope, ListService: this.mockService });
      }));

      describe('ListCtrl', function() {
         it('should create items with 3 tasks', function($controller) {
            this.mockService.all.mostRecentCall.args[0]([{}, {}]);

            expect(this.scope.todoList.length).toBe(2);
         });

         it('should populate order options', function() {
            expect(this.scope.orderOptions.length).toBe(2);

            expect(this.scope.orderOptions[0].value).toBe('age');
            expect(this.scope.orderOptions[0].description).toBe('Age');

            expect(this.scope.orderOptions[1].value).toBe('name');
            expect(this.scope.orderOptions[1].description).toBe('Alphabetical');
         });

         it('should initially order by age', function() {
            expect(this.scope.selectedOrderOption).toBe('age');
         });
      });
   });
})();
