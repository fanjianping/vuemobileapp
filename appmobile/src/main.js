import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/index.js'
import './libs/flexible/js/frame/flexible.debug.js'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import './assets/font/iconfont.css'
import theme from 'muse-ui/lib/theme';
Vue.use(MuseUI);
// theme.use('dark');
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')