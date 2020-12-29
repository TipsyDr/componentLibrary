/**
 * @file 注册所有的组件库
 * @author zhuxiaohan
 */

import Toast from './component/base/toast';
import ZSwitch from './component/base/switch';
import ZSwiper from './component/base/swiper';
import ZButton from './component/base/button';

const components: any = {
    ZSwitch,
    ZSwiper,
    ZButton
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
