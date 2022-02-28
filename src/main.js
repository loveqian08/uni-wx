import Vue from 'vue'
import App from './App'
import store from './store/store.js';
import flyRequest from './common/request.js';
import { Global } from '@/common/global.js';
import Format from '@/common/format.js';
Vue.config.productionTip = false
// filters
import { filters } from '@/filters/filters.js';
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key]);
});
Vue.prototype.$store = store;
Vue.prototype.$http = flyRequest;
Global.init();
Vue.prototype.$global = Global;

Vue.Format = Format;
Vue.prototype.$format = Format;
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
