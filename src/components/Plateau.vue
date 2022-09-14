<script>
    //import "/style.css";
    import axios from "axios";

    
    export default {
      data() {
        return {
          posts: [],
        };
      },
      components: {
},
      mounted() {
        axios
          .get(
            "https://killer-cepegra.xyz/cockpit-ingrwf10/api/content/items/questions?sort=%7Bnumber%3A%22asc%22%7D"
          )
          .then((response) => {
            //this.posts = response.data;
            console.log(response.data);
            this.posts = response.data; // dans mon tableau
          });
      },
    };
    </script>
    
    <template>
      <div className="view">
        <Joueur></Joueur>
        <Dice></Dice>
        <div className="plate">
        <div className="cell" v-for="(question, key) in posts" :key="key">
          {{ question.number }}
        </div>
    </div>
      </div>
    </template>

    <style scoped>

    .view {
        display: flex;
    }
    .plate {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1.5rem;
        padding: 2rem
    }
    .cell {
        padding: 2rem;
        border-radius: 0.5rem;
        box-shadow: 0px 0px 15px#a4a4a467;
    
    }
    </style>