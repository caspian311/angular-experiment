(function() {
   describe('ListServices', function() {
      beforeEach(module('listAppServices'));

      describe('all', function() {
         it('should return back all the items in the list', inject(function(ListService) {
               expect(ListService.all().length).toBe(3);
         }));
      });
   });
})();
