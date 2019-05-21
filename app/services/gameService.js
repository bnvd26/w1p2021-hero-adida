/* A COMPLTETER */
class GameService {
  constructor() {
    const value = localStorage.getItem('points');
    if (value)
      this.points = Number(value);
    else
      this.points = 100;
  }

  set(value) {
    this.points = value;
    localStorage.setItem('points', value); 
  }

  increment() {
    return this.points += 20;
  }



  get() {
    return this.points;
  }



  // localStorageSet () {
//   if (localStorage.getItem('points')) {
//     try {
//       this.points = JSON.parse(localStorage.getItem('points'));
//     } catch(e) {
//       localStorage.removeItem('points');
//     }
//   }
// }

// 


// increment() {
//     this.points += 20;
    
//   }


//   value() {
//     return this.points;
//   }

//   clearLocalStorage() {
//     localStorage.clear('points');
//   }
}


module.exports = new GameService();
