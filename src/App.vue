<script setup>
  import {ref, computed} from 'vue'
  import { useGameStore } from '@/stores/game'
  import Dice from '@/components/Dice.vue'
  import Joueur from '@/components/Joueur.vue'
  import Plateau from './components/Plateau.vue'
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
      <input type="text" v-model="newUser"> <button @click="addUser">+</button>
      <ul>
        <li v-for="(member, key) in listMembers" :key="key">
        {{ member }}</li>
      </ul>
      <div class="wrapper">
      
        <h1>Joueurs</h1>
        <Joueur v-for="(item, key) in listMembers" :key="key" :ident="key" @clickjoueur="parentjoueur"></Joueur>
      
      </div>
    </header>
    <body>
      <Plateau/>
      <Dice/>

    </body>
  </template>
  <style scoped>

  header {
    line-height: 1.5;
    max-height: 100vh;
  }
  .logo {
    display: block;
    margin: 0 auto 2rem;
  }
  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }
  nav a.router-link-exact-active {
    color: var(--color-text);
  }
  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }
  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }
  nav a:first-of-type {
    border: 0;
  }
  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }
    .logo {
      margin: 0 2rem 0 0;
    }
    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;
      padding: 1rem 0;
      margin-top: 1rem;
    }
  }
  </style>
  