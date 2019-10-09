import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi', /*drop after here*/
    theme: {
      themes: {
        light: {
          primary: '#01579B',
          secondary: '#3366ff',
          tertiary: '#C2185B',
          accent: '#8c9eff',
          error: '#b71c1c',
          tbc: '#cccccc',
        },
      },
    },
  }
});
