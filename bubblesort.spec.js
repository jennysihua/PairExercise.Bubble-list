describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( []);
    });

    it('handles an array with one element', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
    });

    it('Doesnt mutate a sorted array', function(){
        expect( bubbleSort([1,2,3,4]) ).toEqual( [1,2,3,4] );
    });

    // it('returns null when an input paramater is not an array', function() {
    //     expect(bubbleSort('teststring').toBeNull())
    // });

    it('returns a sorted array from least to greatest', function(){
        expect( bubbleSort([4,3,2,1]) ).toEqual( [1,2,3,4] );
        expect( bubbleSort([20,10,5,1])).toEqual( [1,5,10,20] );
    });

    // it('function is not called an excessive number of times', function(){
    //     spyOn(window, 'bubbleSort').and.callThrough();
    //     bubbleSort(array);
    //     expect(bubbleSort.calls.count()).toEqual(array.length-1)
    // });


    it('does not the native array sort method', function(){
        spyOn(Array.prototype, 'sort');
        bubbleSort([3,2,1]);
        expect(Array.prototype.sort.calls.count()).toEqual(0);
    });



});

