<template>
  <div id="app">
    <v-app>
      <v-content>
        <!--HEADER-->
        <v-app-bar fixed app flat color="indigo lighten-1">
          <v-toolbar-title>
            <div id="home">
              <a id="home" href="/">
                <span class="font-weight-bold white--text">Best Shirts:</span>
                <span class="font-weight-light white--text">SHIRTS FOR YOU</span>
              </a>
            </div>
          </v-toolbar-title>
          <div class="text-center ml-5">
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on">
                  <v-icon left>expand_more</v-icon>Category
                </v-btn>
              </template>
              <v-list>
                <v-row>
                  <v-btn id="menuB" block href="men">
                    <span>Men</span>
                  </v-btn>
                </v-row>
                <v-row>
                  <v-btn id="menuB" block href="women">
                    <span>Women</span>
                  </v-btn>
                </v-row>
              </v-list>
            </v-menu>
          </div>

          <v-spacer></v-spacer>

          <div class="text-center">
            <v-badge overlap left color="yellow accent-4">
              <template v-slot:badge v-if="messages > 0">{{ messages }}</template>
              <v-btn class="grey lighten-3 ma-1">
                <v-icon left>shopping_cart</v-icon>
                <span>Your Cart</span>
              </v-btn>
            </v-badge>
            <v-btn class="yellow accent-4 black--text depressed ma-2">Check Out</v-btn>
          </div>
        </v-app-bar>
        <!--ROUTE CONTENT-->
        <router-view />
        <!--Footer-->
        <v-footer dark padless>
          <v-card flat tile class="indigo lighten-1 white--text text-center">
            <v-card-text>
              <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus
              commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at
              orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et
              faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices,
              cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut
              orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
              mus.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
              {{ new Date().getFullYear() }} —
              <strong>BEST SHIRTS A/S</strong>
            </v-card-text>
          </v-card>
        </v-footer>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      messages: 0,
      icons: [
        "fa fa-facebook",
        "fa fa-twitter",
        "fa fa-linkedin",
        "fa fa-instagram"
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-color: #fefefe;
}

#nav {
  height: 0;
}

/*comment*/

#carousel {
  padding: 0;
}

#main-p1 {
  display: flex;
  justify-content: center;
}

#prc {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 1400px;
  margin: 0 auto 0 auto;
}

#tt1 {
  text-decoration: none;
  color: #ff9800;
}

#home {
  text-decoration: none;
}

#cardText li {
  list-style-type: none;
}

#card1 {
  justify-content: center;
}

#menuB span {
  text-decoration: none;
  font-family: Roboto;
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
