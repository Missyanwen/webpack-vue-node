
import Vue from 'vue';
import VueRouter from 'vue-router';
import routesMap from './map';

import createComponent from '../views/create';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: routesMap,
});

export default router;