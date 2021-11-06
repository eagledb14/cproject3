<template>
    <div class="cards">
    <h1 class="title">Cards</h1>
    <h2>{{term.name}}</h2>
    <p>{{choice1}}</p>
    <p>{{choice2}}</p>
    <p>{{choice3}}</p>
    <p>{{choice4}}</p>
    <button @click="pickChoice">click</button>

    </div>
</template>



<script>

export default {
  name: "Cards",
  data() {
    return {
      term: null,
      choice1: null,
      choice2: null,
      choice3: null,
      choice4: null
    }
  },
  methods: {
    pickTerm() {
      let randTerm = Math.floor(Math.random() * this.$root.$data.terms.length);

      this.term = this.$root.$data.terms[randTerm];
    },
    pickChoice() {
      let choices = [this.chioce1, this.choice2, this.choice3, this.choice4];
      choices.shuffle();

    }
  },
  computed: {

  },
  created() {
    this.pickTerm();
  }
}
</script>


<style scoped>


</style>