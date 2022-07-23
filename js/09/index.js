var CQueue = function () {
  this.stackA = []
  this.stackB = []
}

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stackA.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (!this.stackB.length) {
    if (!this.stackA.length) {
      return -1
    }
    else {
      while (this.stackA.length) {
        this.stackB.push(this.stackA.pop())
      }
    }
  } 
  return this.stackB.pop()
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
