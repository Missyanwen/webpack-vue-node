
//window.$ = require('lib/jquery/jquery.min');
window.$ = require('jquery');
import './css/style';

import Vue from 'vue';
// import VuePlain from 'lib/vue-plugins/vue-plain';
// Vue.use(VuePlain);

// 全局捕获vue错误
Vue.config.errorHandler = function (...args) {
    console.log(args);
}

// app
import App from './App';
import router from './router/index';
import store from './store/index';

new Vue({
    el: '#app',
    router,
    store,
    render:h =>h (App)
});

