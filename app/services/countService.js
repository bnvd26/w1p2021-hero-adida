class CountService {
  constructor() {
    this.points = 100;
  }
  increment() {
    this.points++;
  }
  value() {
    return this.points;
  }
}

module.exports = new CountService();