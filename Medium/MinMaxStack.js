class MinMaxStack {
    constructor () {
      this.items = []
    }
    
    peek() {
     return this.items[this.items.length - 1];
    }
  
    pop() {
      return this.items.pop();
    }
  
    push(number) {
      this.items.push(number);
      console.log(this.items)
    }
  
    getMin() {
      let min = Infinity;
      for (let i = 0; i < this.items.length; i++) {
        const current = this.items[i];
        if (current < min) min = current;
      }
      return min;
    }
  
    getMax() {
      let max = -Infinity;
      for (let i = 0; i < this.items.length; i++) {
        const current = this.items[i];
        if (current > max) max = current;
      }
      return max;
    }
}