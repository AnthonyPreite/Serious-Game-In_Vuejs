<script setup>
  import "/src/style.css"
  import {ref, computed} from 'vue'
  import { useGameStore } from '@/stores/game'
  import Dice from '@/components/Dice.vue'
  import Joueur from '@/components/Joueur.vue'
  import Plateau from './components/Plateau.vue'
  import QcmM from './components/QcmM.vue'
  const gameStore = useGameStore()
  const members = ['Pierre', 'Jean', 'Charles']
  gameStore.addMembers(members)
  const listMembers = computed( () => { return gameStore.allJoueurs})
  const newUser = ref('')
  const addUser = () => {
    gameStore.addAMember(newUser.value)
  }

  const parentjoueur = (value) => {
    alert('click in joueur n° ' + value)
  }
  </script>
  <template>
    <header>
      <div className="form">
      <input type="text" v-model="newUser"> <button class="push" @click="addUser">+</button>
      <ul>
        <li v-for="(member, key) in listMembers" :key="key">
        {{ member }}</li>
      </ul>
    </div>
      <div class="wrapper">
      
      <h1>Joueurs :</h1>
        <Joueur v-for="(item, key) in listMembers" :key="key" :ident="key" @clickjoueur="parentjoueur"></Joueur>
      
      </div>
    </header>
    <body>
      <Plateau/>
      <Dice/>

    </body>
  </template>

  