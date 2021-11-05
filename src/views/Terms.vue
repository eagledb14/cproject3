<template>
  <div class="terms">
    <h1 class="title">Terms</h1>

    <div class="page">
      <div class="content">

        <h3 class="def-context">Good</h3>
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

      </div>


      <div class="add-item">
        <h3> Add Item</h3>
        <input v-model="word" type="text" placeholder="Word">
        <input v-model="definition" type="text" placeholder="Definition">
        <button @click="addWord">Add</button>
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
      definition: ""
    }
  },
  methods: {
    addWord() {
      if (this.word == "" || this.def == "") {
        return;
      }
      // console.log(this.$root.$data.terms.length);
      
      let newWord = {
        id: this.$root.$data.terms.length + 1,
        name: this.word,
        def: this.definition,
        right: 0,
        wrong: 0
      }

      console.log(newWord);
      this.$root.$data.terms.push(newWord)
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

/* Mobile */
@media only screen and (max-width: 700px) { 
  .content {
    width: 80%;
  }
}


</style>
