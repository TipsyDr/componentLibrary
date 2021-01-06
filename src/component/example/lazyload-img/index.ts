const pageRouter = {
    path: '/lazyLoadImg',
    name: 'LazyLoadImg',
    component: () => import('./App.vue')
};
export default pageRouter;