import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  data () {
    return {
      
        show: false,
        messages: 0,
    }
  } 
});
