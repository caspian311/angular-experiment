(function() {
   describe('listAppControllers', function() {
      beforeEach(module('listAppControllers'));

      beforeEach(inject(function($rootScope) {
         this.scope = $rootScope.$new();
         this.mockService = { all: jasmine.createSpy() };
      }));

      describe('ListCtrl', function() {
         it('should create items with 3 tasks', inject(function($controller) {
         this.mockService = { all: jasmine.createSpy() };
            this.mockService.all.andReturn([{}, {}, {}]);

            this.ctrl = $controller('ListCtrl', {$scope: this.scope, ListService: this.mockService });

            expect(this.scope.todoList.length).toBe(3);
         }));

         describe('non-service tests', function() {
            beforeEach(inject(function($controller) {
               $controller('ListCtrl', {$scope: this.scope, ListService: this.mockService });
            }));

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
   });
})();
