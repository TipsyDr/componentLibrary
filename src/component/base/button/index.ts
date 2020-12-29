/**
 * @file button组件
 */
import Component from './App.vue';

// @ts-ignore
Component.install = (Vue: any) => {
    Vue.component(Component.name, Component);
};
export default Component;
