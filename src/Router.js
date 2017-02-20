import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// ===================== Pages Components ======================
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';

// ==================== Router registration ====================
export default new Router({
    mode: 'hash',
    routes: [{
            path: '/Page1',
            component: Page1
        },
        {
            path: '/Page2',
            component: Page2
        },
        {
            path: '*',
            redirect: '/Page1'
        },
    ]
});
