/**
 * @file 注册所有的组件库
 * @author zhuxiaohan
 */
import ZSwitch from './component/base/switch';
import Toast from './component/base/toast';
import Swiper from './component/base/swiper';

const components: any = {
    ZSwitch,
    Swiper
};

// @ts-ignore
const install = function (Vue: any) {
    // @ts-ignore
    if (install && install.installed) {
        return;
    }

    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key]);
    });
    Vue.use(Toast);
};

// @ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    install,
    ...components
};

export default API;
