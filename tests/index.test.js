
describe('init(array)', () => {
    it('length of the array initially passed should be equal to size of ArrayList ([3,4,5])', () => {
            
            const array = [3,4,5];
            const sut = new ArrayList();   
            expected =  array.length;  
                   
            sut.init(array);
            const actual = sut.getSize();
          
            assert.equal(actual, expected)
    });
});

describe('getSize()', () => {
    it('should return length of current array [1,2,3,4,5] in arraylist ()', () => {
            
            const array = [1,2,3,4,5];
            const sut = new ArrayList();   
            expected =  array.length;  
                   
            sut.init(array);
            const actual = sut.getSize();
          
            assert.equal(actual, expected)
    });

    it('should return length of current array [] in arraylist ()', () => {
        
        const array = [];
        const sut = new ArrayList();   
        expected =  array.length;  
               
        sut.init(array);
        const actual = sut.getSize();
      
        assert.equal(actual, expected)
    });

    it('should return 0 if no array initialized in arraylist ()', () => {
        
        const sut = new ArrayList();   
        expected =  0;  
       
        const actual = sut.getSize();
      
        assert.equal(actual, expected)
    });
});

describe('clear()', () => {
    it('remove all elements in ArrayList ()', () => {
        
        const array = [3,4,5];
        const sut = new ArrayList();  
        sut.init(array); 
        expected =  0;  

        sut.clear();
        const actual = sut.getSize();

        assert.equal(actual, expected)
    });
});

describe('toString()', () => {
    it('should return string representation of ArrayList like "[3,4,-5]" ()', () => {
        
        const array = [3,4,-5];
        const sut = new ArrayList();  
        sut.init(array); 
        expected =  "[3,4,-5]";  
       
        const actual = sut.toString();
      
        assert.equal(actual, expected)
    });

    it('should return empty array string from ArrayList like "[]" ()', () => {
         
        const sut = new ArrayList();  
        expected =  "[]";  
       
        const actual = sut.toString();
      
        assert.equal(actual, expected)
    });
});

describe('toArray()', () => {
    it('should return array of ArrayList elements ()', () => {
        
        const array = [3,4,-5];
        const sut = new ArrayList();  
        sut.init(array); 
        expected =  [3,4,-5];  
       
        const actual = sut.toArray();
      
        assert.deepEqual(actual, expected);
    });    
});

// push(number) returns new size of ArrayList.
describe('push(number)', () => {
    it('should return new size of ArrayList after adding (77)', () => {
        
        const array = [3,4,-5,66];
        const sut = new ArrayList();  
        sut.init(array); 
        expected =  5;  
       
        const actual = sut.push(77);
      
        assert.equal(actual, expected);
    }); 

    it('should return 1 after adding to empty ArrayList (99)', () => {
        
        const sut = new ArrayList();         
        expected =  1;  
       
        const actual = sut.push(99);
      
        assert.equal(actual, expected);
    });  

    it('should return current size if NaN to ArrayList (NaN)', () => {
        
        const sut = new ArrayList();         
        expected =  0;  
       
        const actual = sut.push(NaN);
      
        assert.equal(actual, expected);
    }); 

    it('should return current size if null to ArrayList (null)', () => {
        
        const sut = new ArrayList();         
        expected =  0;  
       
        const actual = sut.push(null);
      
        assert.equal(actual, expected);
    });               
});

// pop() returns the last element of ArrayList;
describe('pop()', () => {
    it('should return last element of the arrayList is any exists  ()', () => {
        
        const array = [3,4,-5,66];
        const sut = new ArrayList();  
        sut.init(array); 
        expected = 66;  
       
        const actual = sut.pop();
      
        assert.equal(actual, expected);
    });    

    it('should return undefined if no elements ()', () => {
        
        const sut = new ArrayList();         
        expected =  undefined;  
       
        const actual = sut.pop();
      
        assert.equal(actual, expected);
    });                      
});

// unshift(number) returns new size of ArrayList. Принимает в качестве аргумента число или undefined;
describe('unshift()', () => {
    it('should return new size of arrayList after adding (44)', () => {
        
        const array = [3,4,-5,66];
        const sut = new ArrayList(); 
        const number = 44;
        sut.init(array); 
        expected = 5;  
       
        const actual = sut.unshift(number);
      
        assert.equal(actual, expected);
    });    

    it('should return 1 after adding to empty ArrayList (99)', () => {
        
        const sut = new ArrayList(); 
        const number = 99;        
        const expected =  1;  
       
        const actual = sut.unshift(number);
      
        assert.equal(actual, expected);
    });  

    it('should return current size if no arguments passed ()', () => {
        
        const sut = new ArrayList();         
        const expected =  0;  
       
        const actual = sut.unshift();
      
        assert.equal(actual, expected);
    });                           
});

// shift() returns the first element of ArrayLIst;
describe('shift()', () => {
    it('should return first element of the arrayList if any exists  ()', () => {
        
        const array = [3,4,-5,66];
        const sut = new ArrayList();  
        sut.init(array); 
        const expected = 3;  
       
        const actual = sut.shift();
      
        assert.equal(actual, expected);
    });    

    it('should return undefined if no elements ()', () => {
        
        const sut = new ArrayList();         
        const expected =  undefined;  
       
        const actual = sut.shift();
      
        assert.equal(actual, expected);
    });                      
});

//slice(start, end) returns new array, containing elements from start (including) to end (excluding);
describe('slice(start, end)', () => {
    it('should return [-5,66,6] from [3,4,-5,66,6,8,10]  (2, 5)', () => {
        
        const array = [3, 4, -5, 66, 6, 8, 10];
        const start = 2;
        const end = 5;
        const sut = new ArrayList();  
        sut.init(array); 
        const expected = [-5, 66, 6];  
       
        const actual = sut.slice(start, end);
      
        assert.deepEqual(actual, expected);
    });    

    it('should return current arrayList if no elements ()', () => {
        
        const array = [1,2,3,4,5];
        const sut = new ArrayList();  
        sut.init(array);       
        const expected =  array;  
       
        const actual = sut.slice();
      
        assert.deepEqual(actual, expected);
    });

    it('should return only arrayList elements starting from 2nd till end (2)', () => {
        
        const array = [1,2,3,4,5,6];
        const sut = new ArrayList(); 
        const start = 2; 
        sut.init(array);       
        expected =  [3,4,5,6];  
       
        const actual = sut.slice(start);
      
        assert.deepEqual(actual, expected);
    });

    it('should return arrayList elements starting from 2nd till end (2,100)', () => {
        
        const array = [1,2,3,4,5,6];
        const start = 2;
        const end = 100;
        const sut = new ArrayList();  
        sut.init(array);       
        expected =  [3,4,5,6];  
       
        const actual = sut.slice(start, end);
      
        assert.deepEqual(actual, expected);
    });
});

//splice(start, numberToSplice, ...newElements) returns array of deleted elements or empty array.
describe('splice(start, deleteCount, ...newElements)', () => {
    it('should return and delete [-5,66,6] from [3,4,-5,66,6,8,10]  (2, 3)', () => {
        
        const array = [3, 4, -5, 66, 6, 8, 10];
        const start = 2;
        const deleteCount = 3;
        const sut = new ArrayList();  
        sut.init(array); 
        const expected = [-5, 66, 6];
        const expectedSize = 4;  
       
        const actual = sut.splice(start, deleteCount);
        const actualSize = sut.getSize();
      
        assert.deepEqual(actual, expected);
        assert.equal(actualSize, expectedSize);
    }); 

    it('should return and delete [-5,66,6б,8,10] from [3,4,-5,66,6,8,10]  (2)', () => {
        
        const array = [3, 4, -5, 66, 6, 8, 10];
        const start = 2;
        const sut = new ArrayList();  
        sut.init(array); 
        const expected = [-5, 66, 6, 8, 10];
        const expectedSize = 2;  
       
        const actual = sut.splice(start);
        const actualSize = sut.getSize();
      
        assert.deepEqual(actual, expected);
        assert.equal(actualSize, expectedSize);
    }); 

    it('should return and delete [] from [3,4,-5,66,6,8,10]  (2)', () => {
        
        const array = [3, 4, -5, 66, 6, 8, 10];
        const start = 2;
        const sut = new ArrayList();  
        sut.init(array); 
        const expected = [-5, 66, 6, 8, 10];
        const expectedSize = 2;  
       
        const actual = sut.splice(start);
        const actualSize = sut.getSize();
      
        assert.deepEqual(actual, expected);
        assert.equal(actualSize, expectedSize);
    }); 

    it('should return  [] and delete nothing from [3,4,-5,66,6,8,10]  ()', () => {
        
        const array = [3, 4, -5, 66, 6, 8, 10];      
        const sut = new ArrayList();  
        sut.init(array); 
        const expected = [];
        const expectedSize = 7;  
       
        const actual = sut.splice();
        const actualSize = sut.getSize();
      
        assert.deepEqual(actual, expected);
        assert.equal(actualSize, expectedSize);
    }); 

    it('should return and delete [-5,66,6] from [3,4,-5,66,6,8,10] and also add three more elements in parameters  (2, 3, 101, 102, 103)', () => {
        
        const array = [3, 4, -5, 66, 6, 8, 10];
        const start = 2;
        const deleteCount = 3;
        const sut = new ArrayList();  
        sut.init(array); 
        const elementOne = 101;
        const elementTwo = 102;
        const elementThree = 103;

        const expectedResult = [-5, 66, 6];
        const expectedSize = 7;
        const expectedToString =  "[3,4,101,102,103,8,10]";
       
        const actualResult = sut.splice(start, deleteCount,elementOne,elementTwo,elementThree);
        const actualSize = sut.getSize();
        const actualToString = sut.toString();
      
        assert.deepEqual(actualResult, expectedResult);
        assert.equal(actualSize, expectedSize);
        assert.equal(actualToString, expectedToString);
    }); 

});
//sort(function(first, seconod) returns nothing (сортирует массив на месте);

// get(index) returns element in ArrayLIst by index;

// set(index, value) changes element in ArrayLIst by index;
