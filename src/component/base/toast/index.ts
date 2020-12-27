/**
 * @file index.js
 */

import ToastComponent from './App.vue'
// @ts-ignore
ToastComponent.install = function (Vue) {
    const Constructor = Vue.extend(ToastComponent);
    const instance = new Constructor();

    const tpl = instance.$mount().$el;
    document.body.appendChild(tpl);
    // @ts-ignore
    Vue.prototype.$toast = (msg, duration = 2000, fn) => {
        if (instance.showToast) {
            return;
        }
        instance.title = msg;
        instance.showToast = true;

        instance.hide(duration, fn);
    }
    Vue.component(ToastComponent.name, ToastComponent);
};


export default ToastComponent;
