import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Create from './components/Create.vue';
import Edit from './components/Edit.vue';
import Index from './components/Index.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

const routes = [{
        name: 'home',
        path: '/',
    },
    {
        name: 'Create',
        path: '/create',
        component: Create
    },
    {
        name: 'Edit',
        path: '/edit/:id',
        component: Edit
    },
    {
        name: 'Index',
        path: '/index',
        component: Index
    },
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});
new Vue({
    render: h => h(App),
    router
}).$mount('#app')