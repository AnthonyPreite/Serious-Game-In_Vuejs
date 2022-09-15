<script>
  export default {
    name: "App",
    data() {
      return {
        rolledValue: 1,
      };
    },
    methods: {
      roll() {
        this.rolledValue = Math.ceil(Math.random() * 5 + 1);
      },
    },
  };
</script>
<template>
  <div class="btncomp">
    <button @click="roll">roll</button>
    <p>rolled dice value: {{ rolledValue }}</p>
  </div>
</template>

<style scope>
  
</style>