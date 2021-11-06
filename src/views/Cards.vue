<template>
    <div class="cards">
    <h1 class="title">Cards</h1>

    <div class="page">
      <div class="content">
        <h2 class="term">{{term.name}}</h2>
        <div class="def-container">
          <div v-for="choice in choices" :key="choice.def">
            <p class="def" @click="handleChoice(choice)">{{choice.def}}</p>
          </div>
        </div>
      </div>

      <h3 class="message"></h3>
      <button @click="next" class="message"></button>
      <!-- <h1>{{isCorrect}}</h1> -->
      <!-- <h3 v-if="correct === true">Correct</h3> -->
    </div>   
    
    <!-- <button @click="pickChoice">click</button> -->

    </div>
</template>

<script>
export default {
  name: "Cards",
  data() {
    return {
      term: null,
      choices: [
        null,
        null,
        null,
        null
      ],
      corret: "wait"
    }
  },
  methods: {
    pickTerm() {
      let randTerm = Math.floor(Math.random() * this.$root.$data.terms.length);

      this.term = this.$root.$data.terms[randTerm];
    },
    pickChoice() {
      for (let i = 0; i < this.choices.length; i++) {
        let rand = Math.floor(Math.random() * this.$root.$data.terms.length);
        let option = this.$root.$data.terms[rand];

        if (option.name !== this.term.name && (this.choices.indexOf(option) === -1)) {
          this.choices[i] = option;
        }
        else {
          i--;
        }
      }

      let rand = Math.floor(Math.random() * 4);
      this.choices[rand] = this.term;
    },
    handleChoice(choice) {
      if (choice === this.term) {
        this.corrent = "true";
        choice.right++;
      }
      else {
        this.corrent = "false";
        choice.wrong++;
      }

      console.log(this.corrent);

      setTimeout(() => {
        this.next();

      }, 5000);
      
    },
    next() {
      this.pickTerm();
      this.pickChoice();
    }
  },
  computed: {
    // isCorrect() {
    //   return this.corrent;
    // }
    // isRight() {
    //   console.log("hello>");
    //   if (this.corrent === true) {
    //     return "green";
    //   }
    //   else if (this.correct === false) {
    //     return "red";
    //   }
    //   else {
    //     return "black"
    //   }
    // }
  },
  created() {
    this.pickTerm();
    this.pickChoice();
  }
}

</script>


<style scoped>

.page {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.content {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.term {
  padding: 20% 30%;
  border: solid black;
  border-radius: 10px;
  box-shadow: -10px 5px 5px #8600fe;
  margin-bottom: 10px;
}

.term:hover {
  transform: scale(1.05) rotate(2deg);
}

.def-container {
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
}

.def {
  width: 100%;
  margin: 15px;
  text-align: center;
  border: solid black 2px;
  box-shadow: -5px 2px 5px #8600fe;
}

.def:hover {
  transform: scale(1.05) rotate(2deg);
}

/* Mobile */
@media only screen and (max-width: 700px) { 
  .content {
    width: 80%;
  }

  .def-container {
    width: 80%;
  }
}

</style>