<template>
<transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
  <div class="big-header page">
    <div class="center"></div>
    <h1 style="font-size: 40px">{{message}}</h1>
     <div v-if="perso == 'kombouare'" style="display: flex;flex-direction: column;align-items: center;">
     <img src="../assets/images/relgation.jpeg" style="position: fixed; min-width: 100%; min-height:100%; z-index:-1; bottom:0; left:0;">
     <p style="font-size: 40px;">Cest la furie dans le stade </p>
     <p>Votre equipe est releguee en deuxieme divison vous avez certainement pas fait les bons choix</p>
   </div>
     <div v-else-if="perso == 'klopp'" style="display: flex;flex-direction: column;align-items: center;">
     <img src="../assets/images/deception.jpg" style="position: fixed; min-width: 100%; min-height:100%; z-index:-1; bottom:0; left:0;">
     <p style="font-size: 40px;">QUELLE DECEPTION POUR LES JOUEURS ET LES SUPPORTERS</p>
     <p>Votre equipe a perdue la finale vous avez certainement pas fait les bons choix</p>
   </div>
    <router-link class="button" to="/home">Go to Home</router-link>
  </div>
</transition>
</template>

<script>
export default {
    data() {
      return {
        message : "LA VICTOIRE",
        audio: false,
        perso: localStorage.getItem('character')
      }  
    },
    methods: {
        myAudio() {
     this.audio = true;
    },
    notAudio() {
      this.audio = false;
    },
    enter(el, done) {
			const tl = new TimelineMax({
				onComplete: done
			})
			
			tl.set(el, {
				autoAlpha: 0,
				rotationX: 90,
				transformOrigin: '50% 50%'
			})
			
			tl.to(el, 1, {
				autoAlpha: 1,
				rotationX: 0,
				ease: Power4.easeOut
			})
		},
		leave(el, done) {
			TweenMax.to(el, 1, {
				scale: 0,
				ease: Power4.easeOut,
				onComplete: done
			});
    }
  }
}
</script>
<style lang="scss" scoped>

.active-animation {
	position: absolute;
	top: 30px;
	left: 50%;
	transform: translate(-50%, 0);
}

.page {
	position: absolute;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;

	
	.center {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		font-size: 3rem;
		text-align: center;
  }
}
</style>
