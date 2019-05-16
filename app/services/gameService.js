/* A COMPLTETER */
class gameService {
  constructor() {
    this.points = 100;
  }
  increment() {
    this.points += 20;
  }
  value() {
    return this.points 
  }
}

module.exports = new gameService();