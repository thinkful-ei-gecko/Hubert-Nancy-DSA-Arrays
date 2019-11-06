const Memory = require('./Memory')
let memory = new Memory();

class myArray {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
        throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * myArray.SIZE_RATIO);
    }
    memory.set(this.ptr + this.length, value);
    this.length++
  }

  pop(){
    if(!this.length) {
      throw new Error('no data')
    }
    //console.log('memory.get',this.ptr + this.length -1)
    const value = memory.get(this.ptr + this.length -1) //getting the value in memory block
    console.log('value', value)
    this.length--;
    return value;
  }

  remove(index){ //1
    if(index >= this.length || index < 0) {
      throw new Error('index is wrong')
    }
    console.log('to, from, length:', this.ptr + index, this.ptr + index + 1, this.length - index - 1)
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
    this.length--
  }
  
  get(index) {

    let value = memory.get(this.ptr + index)
    console.log('first value in array',value)
    return value;
  }

}
myArray.SIZE_RATIO = 3;

module.exports = myArray;