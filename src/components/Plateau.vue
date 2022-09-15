<script>
    import axios from "axios";
    import QcmM from './QcmM.vue'
    
    export default {
      data() {
        return {
          posts: [],
        };
      },
      components: {
        QcmM
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
          <QcmM :sandy="question" v-if="question && question.qtype == 'form-multiple'"/>
        </div>
    </div>
      </div>
    </template>

  