<template>
  <div class="home">
    <h1 class="title">Flash Trivia</h1>

    <div id="page">
      <div class='container'>
      <div class="content">
        <h3> Learn the Terms</h3>
        <router-link to="/terms" class="card">
          <strong>Terms</strong>
        </router-link>
      </div>
      <div class="content">
        <h3>See how you're doing</h3>
        <router-link to="/cards" class="card">
          <strong>Cards</strong>
          <!-- <div id="back-text"></div> -->
        </router-link>
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

.page {
  width: 50%;
}

.container {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-top: 30px;
}

.content > h3 {
  margin-bottom: 20px;
}

.card {
  border: solid black 2px;
  padding: 30%;
  border-radius: 10px;
  box-shadow: -10px 5px 5px #8600fe;
  text-decoration: none;
  color: black;
}

.card:hover {
  transform: scale(1.05) rotate(2deg);
}

/* .back-text {
  position: fixed;
  transform: rotate(-40deg);
  opacity: 0.1;
  z-index: -1;
  padding: 10px 5px;
  border: solid black;
} */

/* Mobile */
@media only screen and (max-width: 700px) { 
  .container {
    flex-direction: column;
  }
}

</style>