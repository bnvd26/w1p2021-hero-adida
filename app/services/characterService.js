class CharacterService {
  constructor() {
    this.afficheKlopp = false,
    this.afficheZidane = false,
    this.afficheKombouare = false
  }
  
    saveCharacterZidane() {
      localStorage.setItem('character', 'zidane'); 
      localStorage.setItem('points', 82) 
    }
    saveCharacterKombouare() {
      localStorage.setItem('character', 'kombouare');  
      localStorage.setItem('points', 87)
    }

    saveCharacterKlopp () {
      localStorage.setItem('character', 'klopp')
      localStorage.setItem('points', 82)
    }

}

module.exports = new CharacterService();




