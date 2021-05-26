//创建VUE
import Vue from './vue.browser.js'
//import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js'
import App from './App.js'

new Vue({
    // render(h) {
    //     return h(App)
    // }

    render: h => h(App),
}).$mount('#app')