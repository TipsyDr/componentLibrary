import Vue from 'vue';
import App from './App.vue';
import router from './router';
import SelfUi from './index';
import CompositionAPI from '@vue/composition-api';
import './common/style/normalize.css';

Vue.use(SelfUi);
Vue.use(CompositionAPI);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
