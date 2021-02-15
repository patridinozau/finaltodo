import Vue from 'vue';
import Vuetify from 'vuetify/lib';


export default new Vuetify({
    icons: {
        iconfont: 'mdi'

    }, },

    Vue.use(Vuetify, {
        iconfont: 'md',
        theme: {
            primary: '#9652ff',
            success: '#3cd1c2',
            info: '#ffaa2c',
            error: '#f83e70'
              }
    }
    ),)