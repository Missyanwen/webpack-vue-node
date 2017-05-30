
import Vue from 'vue';
import Vuex from 'vuex';
import dataSet from './modules/dataset';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	modules: {
		dataSet
	}
})