/* A COMPLTETER */
class GameService {
  constructor() {
   this.points = null
   this.step = null
   this.mental = null
   this.sound = document.createElement("audio");
   this.sound.src = require('../assets/audio/easports.mp3');

   this.sound.setAttribute("controls", "none");
   this.sound.style.display = "none";
   document.body.appendChild(this.sound);
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
  
  removeMental() {
    localStorage.setItem('Mentalite',parseInt(localStorage.getItem('Mentalite'))-7)
  }

  addMental() {
    localStorage.setItem('Mentalite',parseInt(localStorage.getItem('Mentalite'))+7)
  }


  playSound() {

    this.sound.play();
}
stopSound(){
    this.sound.pause();
} 

   

     

  value() {
    return this.points;
  }
}
module.exports = new GameService();
