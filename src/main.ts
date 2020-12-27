import Vue from 'vue';
import App from './App.vue';
import SelfUi from './index';
import CompositionAPI from '@vue/composition-api';
import './common/style/normalize.css';

Vue.use(SelfUi);
Vue.use(CompositionAPI);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
