(function() {
   describe('ListServices', function() {
      beforeEach(module('listAppServices'));

      describe('all', function() {
         it('should return back all the items in the list', inject(function(ListService) {
               var receivedData = null;
               runs(function() {
                  ListServices.all(function(data) {
                     receivedData = data;
                  });
               });

               waitsFor(function() {
                  return receivedData;
                  }, 'ajax called didnt complete in time', 1000);

               expect(receivedData.length).toBe(3);
         }));
      });
   });
})();
