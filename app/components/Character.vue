<template>
 
  <div class="big-header">
  
    <h1 >{{message}}</h1>

    <br />
 <transition-group name="bounce" appear tag="div" class="test">
    <div :key="message" v-if="visible" style="display: flex; flex-direction: row; justify-content:space-around; width:100%;">
   <img :src="firstCharacter" style="height: 220px;" class="hover" @click="showModal = true">
   <img :src="secondCharacter" style="height: 220px;" class="hover hoverr" @click="showModal = true">   
   </div>
    
   </transition-group> 

<transition name="modal">
  
  <div v-if="showModal" style="position: absolute" id="modal-template" class="modal">
     <h1 >TEST<h1>
      
       <img :src="closeSvg" style="width: 30px; height:30px; cursor: pointer" @click="showModal = false">
        <img :src="picEntr" style="width: 100px">
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore minus facere libero recusandae quidem, dignissimos repellendus. Illum, hic ex recusandae, quos deserunt obcaecati, iusto distinctio porro ducimus sint blanditiis tempora?</p>
       <router-link class="button" to="game/1"> Jouer avec Jurgen Klopp </router-link>
    </div> 

</transition>
  <router-link :key="visible"  class="button" to="/game/1">Go to Game</router-link>
     </div>  
</template>

<script>


    export default {
    data () {
        
        
        return {
         
            visible: true,
            showModal: false,
            firstCharacter: require('/assets/images/okay.png'),
            secondCharacter: require('/assets/images/okay.png'),
            closeSvg: require('/assets/images/close.svg'),
            picEntr : require('/assets/images/entraineur-1.png'),
            message : "Choisissez votre PERSONNAGE",
           
        }
        
    },
   methods: {
     
   
     


    }
   
   

 
};






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
