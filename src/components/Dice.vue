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
  .btncomp {
    border-radius: 0.5rem;
    
    box-shadow: 0px 4px 15px hsla(156, 100%, 50%, 0.68);
    padding: 1rem;
    margin: 1rem;
    display: inline-flex;
    gap: 1rem;
  }

  button {
    color: #00bd7e;
    background-color: #00ff99;
    box-shadow: 0px 0px 8px#00fd98;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
  }

  p {
    color: #00bd7e;
    font-family: "roboto-bold";
    
  }
</style>