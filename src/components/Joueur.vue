<template>
    <div>
    <h1 className="playerdisplay">{{ theJoueur }} ({{ ident }})</h1>
    <a href="" @click.prevent="alertParent">Click me</a>
    </div>
</template>
<script setup>
    import { useGameStore } from '@/stores/game'
    const gameStore = useGameStore()
    const props = defineProps(['ident'])
    const theJoueur = gameStore.oneJoueur(props.ident)
    const emits = defineEmits (["clickjoueur"])


const alertParent = () => {
    emits('clickjoueur', props.ident)

}

</script>

<style scoped>
.playerdisplay {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 2rem;
    padding: 1rem;
}


</style>