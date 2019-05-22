/* A COMPLTETER */
class GameService {
  constructor() {
   this.points = null

  }

  localStorageSetter () {
    localStorage.getItem('points')
  }

  localStorageAddGet() {
    localStorage.setItem('points',parseInt(localStorage.getItem('points'))+20);
  }

  localStorageRemoveGet() {
    localStorage.setItem('points',parseInt(localStorage.getItem('points'))-20);
  }  

  value() {
    return this.points;
  }
}

module.exports = new GameService();
