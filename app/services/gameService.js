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
