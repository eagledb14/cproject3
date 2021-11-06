<template>
  <div class="terms">
    <h1 class="title">Terms</h1>

    <div class="page">
      <div class="content">

        <h3 class="def-context">Good job!</h3>
        <div style="border-color: green;" class="display" v-for="word in goodWord" :key="word.id">
          <div class="term">
            <p>{{word.name}}</p>
          </div>
          <div class="def">
            <p>{{word.def}}</p>
          </div>
        </div>

        <h3 class="def-context">Need to work on</h3>
        <div style="border-color: gold;" class="display" v-for="word in mediumWord" :key="word.id">
          <div class="term">
            <p>{{word.name}}</p>
          </div>
          <div class="def">
            <p>{{word.def}}</p>
          </div>
        </div>

        <h3 class="def-context">Work hard on these</h3>
        <div style="border-color: red;" class="display" v-for="word in badWord" :key="word.id">
          <div class="term">
            <p>{{word.name}}</p>
          </div>
          <div class="def">
            <p>{{word.def}}</p>
          </div>
        </div>

        <h3 v-show="notLearned.length > 0" class="def-context">Start Learning These!</h3>
        <div style="border-color: #646770;" class="display" v-for="word in notLearned" :key="word.id">
          <div class="term">
            <p>{{word.name}}</p>
          </div>
          <div class="def">
            <p>{{word.def}}</p>
          </div>
        </div>

      </div>

      <div class="add-item">
        <h2> Add Word</h2>
        <input v-model="word" type="text" placeholder="Word">
        <input v-model="definition" type="text" placeholder="Definition">
      </div>
      <button @click="addWord">Add</button>

      <div v-if="validWord === false">
        <h3>Word not Valid</h3>
      </div>
      <div v-if="notRepeat === false">
        <h3>Word already added</h3>
      </div>
      
    </div>
  </div>
</template>


<script>

export default {
  name: "Terms",
  data() {
    return {
      word: "",
      definition: "",
      validWord: true,
      notRepeat: true
    }
  },
  methods: {
    addWord() {
      if (this.word == "" || this.def == "") {
        this.validWord = false;
        return;
      }
      this.validWord = true;
      
      let newWord = {
        id: this.$root.$data.terms.length + 1,
        name: this.word,
        def: this.definition,
        right: 0,
        wrong: 0
      }

      this.notRepeat = true;
      this.isRepeated(newWord);
      if (this.notRepeat) {
        this.$root.$data.terms.push(newWord);
      }
      this.word = "";
      this.definition = "";
    },
    isRepeated(newWord) {

      this.$root.$data.terms.forEach((term) => { 
        if (term.name === newWord.name || term.def === newWord.def) {
          this.notRepeat = false;
          return;
        }
       });

    }
  },
  computed: {
    words() {
      return this.$root.$data.terms;
    },
    goodWord() {
      return this.$root.$data.terms.filter(word => 
        (word.right / word.wrong) > 1)
    },
    mediumWord() {
      return this.$root.$data.terms.filter(word => 
        (word.right / word.wrong) == 1);
    },
    badWord() {
      return this.$root.$data.terms.filter(word => 
        (word.right / word.wrong) < 1)
    },
    notLearned() {
      return this.$root.$data.terms.filter(word => 
        (word.right === 0 && word.wrong === 0))
    }
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
  flex-direction: column;
  align-items: center;
}

.def-context {
  margin-top: 20px;
}

.display {
  width: 100%;
  height: 100%;
  margin: 5px;
  padding: 20px 0;
  border: solid black 5px;
  box-shadow: -5px 2px 5px #8600fe;
  display: flex;
  flex-direction:row;
  justify-content: space-around;
  align-items: center;
}

.display:hover {
  transform: scale(1.05) rotate(1deg);
}

.term {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
}

.def {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
}

.add-item {
  margin-top: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
}

.add-item > input {
  margin: 10px 0;
  width: 50%;
}

/* Mobile */
@media only screen and (max-width: 700px) { 
  .content {
    width: 80%;
  }

  .add-item > input {
    width: 100%;
  }
}


</style>
