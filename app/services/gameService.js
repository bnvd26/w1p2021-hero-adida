/* A COMPLTETER */
class GameService {
  constructor() {
   this.points = null
   this.step = null
   this.mental = null
  }
  localStorageSetter () {
    localStorage.getItem('points')
  }
  localStorageAddGet() {
    localStorage.setItem('points',parseInt(localStorage.getItem('points'))+20)
    localStorage.setItem('Mentalite',parseInt(localStorage.getItem('Mentalite'))+5)

  }
  localStorageRemoveGet() {
    localStorage.setItem('points',parseInt(localStorage.getItem('points'))-20)
    localStorage.setItem('Mentalite',parseInt(localStorage.getItem('Mentalite'))-5)
  } 
  value() {
    return this.points;
  }
}
module.exports = new GameService();
