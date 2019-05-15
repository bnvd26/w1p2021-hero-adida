<template>
 
  <div class="big-header "  >  <!--:class="showModal ? 'opacity' : ' '-->

  
    <h1 >{{message}}</h1>

    <br />
 <transition name="bounce" appear tag="div" class="test">
    <div :key="message" v-if="visible" style="display: flex; flex-direction: row; justify-content:space-around; width:100vw;">
   <img :src="firstCharacter" style="height: 220px;" class="hover" @click="showModal = true">
   <img :src="secondCharacter" style="height: 220px;" class="hover hoverr" @click="showModal = true" >   
   <img :src="thirdCharacter" style="height: 220px;" class="hover hoverr" @click="showModal = true"> 

   </div>
    
   </transition> 

<transition name="modal">
  
  <div v-if="showModal" style="position: absolute;" id="modal-template" class="modal" >
     <h1 >TEST<h1>
      
       <img :src="closeSvg" style="width: 30px; height:30px; cursor: pointer; position:absolute; right:10px; top:10px;" @click="showModal = false">
        <img :src="cardEntr" style="width: 100px">
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore minus facere libero recusandae quidem, dignissimos repellendus. Illum, hic ex recusandae, quos deserunt obcaecati, iusto distinctio porro ducimus sint blanditiis tempora?</p>
       <router-link class="button" to="game/1"> Jouer avec Jurgen Klopp </router-link>
    </div> 

</transition>
  <router-link :key="visible"  class="button" to="/game/1">Go to Game</router-link>
    <button v-on:click="counter += 1">Add 1</button>
 <p :key="view">{{counter }}</p>
          <input v-model="tst">


    

</template>

<script>



    export default {
    data () {
        

        return {
     
          tst: '',
          view: '',
         counter: 0,
           visible: true,
            showModal: false,
            firstCharacter: require('/assets/images/klopp.png'),
            secondCharacter: require('/assets/images/zidane.png'),
            thirdCharacter: require('/assets/images/kombouare.png'),
            closeSvg: require('/assets/images/close.svg'),
            cardEntr : require('/assets/images/entraineur-1.png'),
            message : "Choisissez votre PERSONNAGE",
           
        }
        
    },

     mounted () {
    if (localStorage.tst) {
      this.tst = localStorage.tst;
    }

   

  },


   watch: {
    tst(tstT) {
      localStorage.tst = tstT;
    },
     
   
  },

 
   
   methods: {
     click : function () {
       document.querySelector('.loader__title').classList.add('loader--active')
     },

   
     


    }

    
 

       
  }
 
  
   
   

 







</script>
<style>

.translate-enter, .translate-enter-active {
  transform: translateY(100px);
}

.fade-enter, .fade-leave {
  transition: opacity .9s;
  color: red;

}


.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translateX(20px);
  color: red;
}

.bounce-enter-active {
  animation: bounceIn 2s;
}

.loader {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 0;
  height: 100vh;
  transition: width 0s 1.4s ease;
}

.loader .loader__tile {
  position: absolute;
  left: 0;
  width: 0;
  height: 20%;
  background-color: #007AE5;
  transition: width 0.7s ease;
}
.loader .loader__tile:nth-child(0) {
  top: calc(-1 * 20%);
  transition-delay: -0.2s;
}
.loader .loader__tile:nth-child(1) {
  top: calc(0 * 20%);
  transition-delay: 0s;
}
.loader .loader__tile:nth-child(2) {
  top: calc(1 * 20%);
  transition-delay: 0.2s;
}
.loader .loader__tile:nth-child(3) {
  top: calc(2 * 20%);
  transition-delay: 0.4s;
}
.loader .loader__tile:nth-child(4) {
  top: calc(3 * 20%);
  transition-delay: 0.6s;
}
.loader .loader__tile:nth-child(5) {
  top: calc(4 * 20%);
  transition-delay: 0.8s;
}
.loader--active {
  width: 100%;
  transition-delay: 0s;
}
.loader--active .loader__icon {
  opacity: 1;
  transition: opacity 0.5s 1.4s ease;
}
.loader--active .loader__tile {
  width: 100%;
}
.loader--active .loader__tile:nth-child(0) {
  transition-delay: -0.2s;
}
.loader--active .loader__tile:nth-child(1) {
  transition-delay: 0s;
}
.loader--active .loader__tile:nth-child(2) {
  transition-delay: 0.2s;
}
.loader--active .loader__tile:nth-child(3) {
  transition-delay: 0.4s;
}
.loader--active .loader__tile:nth-child(4) {
  transition-delay: 0.6s;
}
.loader--active .loader__tile:nth-child(5) {
  transition-delay: 0.8s;
}



@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}


@keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}

</style>
