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
}
myArray.SIZE_RATIO = 3;

module.exports = myArray;