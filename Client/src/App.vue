<template>
  <div id="app">
    <div id="nav">
      <div class="row">
        <div class="col-4 d-flex justify-content-start">
          <div v-if="isHidden">
            <h3><i class="fas fa-bars" @click="isHidden = !isHidden"></i></h3>
          </div>
        </div>
        <div class="col-4 d-flex justify-content-center">
          <h1>RCMF</h1>
        </div>
        <div class="col-4 d-flex justify-content-end">
          <h3>LOGO</h3>
        </div>
      </div>
    </div>
    <router-view />
    <div class="sidenav" v-if="!isHidden">
      <h3><i class="fas fa-arrow-circle-left" @click="isHidden = true"></i></h3>
      <router-link to="/">Home</router-link>
      <router-link to="/events">Events</router-link>
      <router-link to="/grants">Grants</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>


  </div>
</template>

<script>
  export default {

    data() {
      return {
        isHidden: true
      }
    },

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }


  body {
    font-family: "Lato", sans-serif;
    background-color: black;
    color: white;
  }

  #nav {
    color: white;
  }

  .sidenav {
    height: 100%;
    width: 20vw;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgba(255, 0, 0, 0.527);
    overflow-x: hidden;
    padding-top: 20px;
  }

  .sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 3vh;
    color: #ffffff;
    display: block;
    cursor: pointer;
  }

  .sidenav a:hover {
    color: #f1f1f1;
    text-decoration: underline;
  }

  .main {
    margin-left: 160px;
    font-size: 28px;
    padding: 0px 10px;
  }

  .sidenav {
    padding-top: 2vh;
    min-width: 35vw;

  }

  .sidenav a {
    font-size: 2rem;
  }


  i {
    cursor: pointer;
    color: white;
  }
</style>