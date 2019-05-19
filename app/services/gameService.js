/* A COMPLTETER */
class GameService {
  constructor() {
    this.points = 100;
  }


localStorageSet () {
  if (localStorage.getItem('points')) {
    try {
      this.points = JSON.parse(localStorage.getItem('points'));
    } catch(e) {
      localStorage.removeItem('points');
    }
  }
}

savePoints() {
  const parsed = JSON.stringify(this.points);
  localStorage.setItem('points', parsed); 
}


increment() {
    this.points += 20;
    
  }


  value() {
    return this.points;
  }

  clearLocalStorage() {
    localStorage.removeItem('points');
  }
}


module.exports = new GameService();




    
 
