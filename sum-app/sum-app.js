class SumApp {
  numbers = [];

  addNumber(number) {
    this.numbers.push(number);
  }

  getSum() {
    let result = 0;
    if (this.numbers.length === 0) {
      return result;
    } else {
      this.numbers.forEach((element) => {
        result += element;
      });
      return result;
    }
  }

  reset() {
    this.numbers = [];
  }
}
