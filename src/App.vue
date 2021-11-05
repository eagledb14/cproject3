<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link to="/" class="logo">Flash Trivia</router-link>
      </div>
      <div class="nav-item"> 
        <router-link to="/">Home</router-link> 
        <router-link to="/terms">Terms</router-link> 
        <router-link to="/cards">Cards</router-link>
      </div>
    </div>
    <router-view/>
    
    <div class="footer">
      <a target="_blank" href="https://github.com/eagledb14/cproject3">Github</a>
    </div>
  </div>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  background-color: #4c008e;
  color: white;
}

.logo {
  text-decoration: none;
  color: white !important;
  font-size: 2rem; 
}

.nav-item {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 20%;
}

#nav a {
  font-weight: bold;
  color:white;
}

#nav a.router-link-exact-active {
  color: yellow;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25%;
  padding-top: 10px;
  border-top: 2px solid #4c008e;
}

.footer > a {
  text-decoration: none;
  color: white;
  padding: 5px;
  background-color: #4c008e;
  border-radius: 10px;
}

.footer > a:hover {
  color: yellow;
} 

/* Mobile */
@media only screen and (max-width: 700px) { 
  .nav-item {
    flex-direction: column;
  }
}

</style>
