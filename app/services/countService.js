class CountService {
  constructor() {
    this.points = 0;
  }
  increment() {
    this.points++;
  }
  value() {
    return this.points;
  }
}

module.exports = new CountService();