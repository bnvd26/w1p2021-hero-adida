/* A COMPLTETER */
class gameService {
  constructor() {
    this.points = 100;
  }


localStorageSet () {
  if (localStorage.getItem('points')) {
    try {
      this.points = JSON.parse(localStorage.getItem('points'));
    } catch(e) {
      Console.LOG('ERROR')
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
}


module.exports = new gameService();




    
 
