function ArrayList(){
  currentArray = [];
  size = 0;
  this.init = array => {
    currentArray = array;
    size = array.length;
    currentArray.length = size * 2;
  };
  this.getSize = () => {
    return size;
  };
  this.clear = () => {
    currentArray.length = 0;
    size = 0;
  };
  this.toString = () => {
    let tempArray = currentArray;
    tempArray.length = size;
    return `[${tempArray}]`;
  }
  this.toArray = () => {
    return currentArray;
  }
  this.push = number => {
    if(isNaN(number)) return size;
    if(typeof number === 'undefined') return size;
    if(number === null) return size;
    size++;
    let length = currentArray.length;
    currentArray[length] = number;    
    currentArray.length = size * 2;

    return size;
  }
  this.pop = () => {
    return currentArray[size-1];
  }
  this.unshift = (number) => {
    if(typeof number === 'undefined') return size;
    size++;
    let tempArray = [];
    tempArray[0] = number;
    let i = 1;
    for(element of currentArray){
      tempArray[i] = element;
      i++;
    } 
    currentArray = tempArray;
    currentArray.length = size * 2;
    return size;
  }
  this.shift = () => {
    let result = currentArray[0];

    let tempArray = new Array(currentArray.length + 1);    
    let i = 0;
    for(let i = 0; i < currentArray.length-1; i++){
      tempArray[i] = currentArray[i+1];
    } 
    currentArray = tempArray;
    return result;
  }
}