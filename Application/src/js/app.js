import Vue from './vendor/vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import VueFire from 'vuefire';
import 'bootstrap';
import slick from 'slick-carousel';

window.$ = require('jquery');

Vue.use(VueFire)
Vue.use(VueRouter);
Vue.use(BootstrapVue);



// Components
import Index from './components/index.vue';
import Home from './components/home/home.vue';
import Articles from './components/articles/articles.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/articles', component: Articles }
];

const router = new VueRouter({
    mode: 'history',
    routes
});


let app = new Vue({
    el: '#app',
    components: { Index },
    router,
    template: '<Index/>'
}).$mount('#app');


