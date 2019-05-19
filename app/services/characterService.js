class CharacterService {
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

module.exports = new CharacterService();




