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

