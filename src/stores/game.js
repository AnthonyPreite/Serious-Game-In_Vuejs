import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore( {
  id:'game',
  state: () => ({
    joueurs: ref(["test"])
  }),
  getters: {
    allJoueurs: (state) => {
      return state.joueurs
    },
    oneJoueur: (state) => {
      return (id) => state.joueurs[id]
    }
  },
  actions: {
    addMembers(members) {
      this.joueurs = [... members]
    },
    addAMember(member) {
      this.joueurs.push(member)
    }
  }

})