<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/albums">Albums</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/shoes">Shoes</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => ({
  
        icons: [
          'fa fa-facebook',
          'fa fa-twitter',
          'fa fa-linkedin',
          'fa fa-instagram',
        ],
        items1: [
          { title: 'Men' },
          { title: 'Women' },
        ],
        show: false,
        messages: 0,
  }),
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
   background-color: #fefefe;
  }
  /*comment*/


#carousel {
    padding: 0;
}

#main-p1 {
    display: flex;
    justify-content: center;
}

#productCont {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    width: 1400px;
    margin: 0 auto 0 auto;
}

#tt1 {
    text-decoration: none;
    color: #FF9800;
}

#home {
    text-decoration: none;
}

#cardText li{
    list-style-type: none;
}

#card1 {
    justify-content: center;
}

#buy-btn {
    bottom: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    margin-left: 35px;
}
</style>
