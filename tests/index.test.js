// describe('', () => {
//     it('should ...', () => {
//         //given        
//         const value = "some value";       
//         //when
//         const actual = methodUnderTest(value)
//         //then
//         assert.equal(actual, expected)
//     });
// })

// Arraylist tests
describe('init(array)', () => {
    it('length of the array initially passed should be equal to size of ArrayList ([3,4,5])', () => {
            //given        
            const array = [3,4,5];
            const sut = new ArrayList();   
            expected =  array.length;  
            //when            
            sut.init(array);
            const actual = sut.getSize();
            //then
            assert.equal(actual, expected)
    });
});

describe('getSize()', () => {
    it('should return length of current array [1,2,3,4,5] in arraylist ()', () => {
            //given        
            const array = [1,2,3,4,5];
            const sut = new ArrayList();   
            expected =  array.length;  
            //when            
            sut.init(array);
            const actual = sut.getSize();
            //then
            assert.equal(actual, expected)
    });

    it('should return length of current array [] in arraylist ()', () => {
        //given        
        const array = [];
        const sut = new ArrayList();   
        expected =  array.length;  
        //when            
        sut.init(array);
        const actual = sut.getSize();
        //then
        assert.equal(actual, expected)
    });

    it('should return 0 if no array initialized in arraylist ()', () => {
        //given        
        const sut = new ArrayList();   
        expected =  0;  
        //when
        const actual = sut.getSize();
        //then
        assert.equal(actual, expected)
    });
});

describe('clear()', () => {
    it('remove all elements in ArrayList ()', () => {
        //given        
        const array = [3,4,5];
        const sut = new ArrayList();  
        sut.init(array); 
        expected =  0;  
        //when
        sut.clear();
        const actual = sut.getSize();
        //then
        assert.equal(actual, expected)
    });
});

describe('toString()', () => {
    it('should return string representation of ArrayList like "[3,4,-5]" ()', () => {
        //given        
        const array = [3,4,-5];
        const sut = new ArrayList();  
        sut.init(array); 
        expected =  "[3,4,-5]";  
        //when
        const actual = sut.toString();
        //then
        assert.equal(actual, expected)
    });

    it('should return empty array string from ArrayList like "[]" ()', () => {
        //given 
        const sut = new ArrayList();  
        expected =  "[]";  
        //when
        const actual = sut.toString();
        //then
        assert.equal(actual, expected)
    });
});


describe('toArray()', () => {
    it('should return array of ArrayList elements ()', () => {
        //given        
        const array = [3,4,-5];
        const sut = new ArrayList();  
        sut.init(array); 
        expected =  [3,4,-5];  
        //when
        const actual = sut.toArray();
        //then
        assert.deepEqual(actual, expected);
    });    
});

// push(number) returns new size of ArrayList. 
//Принимает в качестве аргумента число или undefined;
describe('push(number)', () => {
    it('should return new size of ArrayList after adding (77)', () => {
        //given        
        const array = [3,4,-5,66];
        const sut = new ArrayList();  
        sut.init(array); 
        expected =  5;  
        //when
        const actual = sut.push(77);
        //then
        assert.equal(actual, expected);
    }); 

    it('should return 1 after adding to empty ArrayList (99)', () => {
        //given
        const sut = new ArrayList();         
        expected =  1;  
        //when
        const actual = sut.push(99);
        //then
        assert.equal(actual, expected);
    });  

    it('should return current size if NaN to ArrayList (NaN)', () => {
        //given
        const sut = new ArrayList();         
        expected =  0;  
        //when
        const actual = sut.push(NaN);
        //then
        assert.equal(actual, expected);
    }); 

    it('should return current size if null to ArrayList (null)', () => {
        //given
        const sut = new ArrayList();         
        expected =  0;  
        //when
        const actual = sut.push(null);
        //then
        assert.equal(actual, expected);
    });               
});

// pop() returns the last element of ArrayList;
describe('pop()', () => {
    it('should return last element of the arrayList is any exists  ()', () => {
        //given        
        const array = [3,4,-5,66];
        const sut = new ArrayList();  
        sut.init(array); 
        expected = 66;  
        //when
        const actual = sut.pop();
        //then
        assert.equal(actual, expected);
    });    

    it('should return undefined if no elements ()', () => {
        //given
        const sut = new ArrayList();         
        expected =  undefined;  
        //when
        const actual = sut.pop();
        //then
        assert.equal(actual, expected);
    });                      
});

// unshift(number) returns new size of ArrayList. Принимает в качестве аргумента число или undefined;
describe('unshift()', () => {
    it('should return new size of arrayList after adding (44)', () => {
        //given        
        const array = [3,4,-5,66];
        const sut = new ArrayList();  
        sut.init(array); 
        expected = 5;  
        //when
        const actual = sut.unshift(44);
        //then
        assert.equal(actual, expected);
    });    

    it('should return 1 after adding to empty ArrayList (99)', () => {
        //given
        const sut = new ArrayList();         
        expected =  1;  
        //when
        const actual = sut.unshift(99);
        //then
        assert.equal(actual, expected);
    });  

    it('should return current size if no arguments passed ()', () => {
        //given
        const sut = new ArrayList();         
        expected =  0;  
        //when
        const actual = sut.unshift();
        //then
        assert.equal(actual, expected);
    });                           
});

// shift() returns the first element of ArrayLIst;
describe('shift()', () => {
    it('should return first element of the arrayList if any exists  ()', () => {
        //given        
        const array = [3,4,-5,66];
        const sut = new ArrayList();  
        sut.init(array); 
        expected = 3;  
        //when
        const actual = sut.shift();
        //then
        assert.equal(actual, expected);
    });    

    it('should return undefined if no elements ()', () => {
        //given
        const sut = new ArrayList();         
        expected =  undefined;  
        //when
        const actual = sut.shift();
        //then
        assert.equal(actual, expected);
    });                      
});

//slice(start, end) returns new array, containing elements from start (including) to end (excluding);
describe('slice(start, end)', () => {
    it('should return first element of the arrayList if any exists  ()', () => {
        //given        
        const array = [3,4,-5,66];
        const sut = new ArrayList();  
        sut.init(array); 
        expected = 3;  
        //when
        const actual = sut.shift();
        //then
        assert.equal(actual, expected);
    });    

    it('should return undefined if no elements ()', () => {
        //given
        const sut = new ArrayList();         
        expected =  undefined;  
        //when
        const actual = sut.shift();
        //then
        assert.equal(actual, expected);
    });                      
});

