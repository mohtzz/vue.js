import {createRouter, createWebHistory} from "vue-router";
import keycloakService from '@/services/keycloak';

import main from '@/pages/main';
import posts from '@/pages/posts';
import about from "@/pages/about";
import postEdit from "@/pages/postEdit";

const routes = [
    {path: '/', component: main},
    {path: '/posts', component: posts},
    {path: '/about', component: about},
    {path: '/posts/:id', component: postEdit},
];

const router = createRouter({routes, history: createWebHistory()});

router.beforeEach((to, from, next) => {
    return keycloakService.CallTokenRefresh().then(token => { next ()});
});
export default router;