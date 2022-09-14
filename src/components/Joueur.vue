<template>
    <div className="nameview">
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
    margin: 1rem;
    background-color: #ffffff;
    color: #313131;
    grid-template-columns: 1fr 0.5fr;
    grid-template-rows: 2fr;
    grid-auto-rows: 2fr;
    padding: 1rem;
    border: 1px solid #313131;
    border-radius: 0.5rem;
}

.nameview {
    background-color: #323e4a;
    border: 1px solid red;
    border-radius: 0.5rem;
    grid-area: "nameview";
    
}
a {
    display: block;
    margin: 1rem;
    font-weight: 600;
    color: #ffffff;
}
</style>