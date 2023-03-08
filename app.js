function double(arr) {
    return arr.map((val) => val * 2);
  }

  function squareAndFindEvens(numbers){
    var squares = numbers.map((num)=> num*num)
    var evens = squares.filter(num => num%2 ===0)
    return evens;
  }