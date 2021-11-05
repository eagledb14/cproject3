<template>
  <div class="home">
    <h1 class="title">Flash Trivia</h1>
    <br>

    <div id="page">
      <div class='container'>
      <div class="content">
        <h3> Learn the Terms</h3>
        <div class="card">Terms</div>
      </div>
      <div class="content">
        <h3>See how you're doing</h3>
        <div class="card">Cards</div>
      </div> 
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

}
</script>

<style scoped>

.title {
  text-align: center;
  margin-top: 15px;
}

.page {
  width: 50%;
}

.container {
  display: flex;
  justify-content: space-around;
  /* width: 100%; */
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  border: solid black 2px;
  padding: 30%;
}


</style>