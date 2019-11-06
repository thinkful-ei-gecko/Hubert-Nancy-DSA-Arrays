const myArray = require('./myArray');

function main() {
  myArray.SIZE_RATIO = 3;

  let arr = new myArray();

  arr.push(5); 
  arr.push(15);
  //arr.push(19);
  //arr.push(45);
  //arr.push(10);
  console.log(arr)
}

main()