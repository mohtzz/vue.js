import {createRouter, createWebHistory} from "vue-router";
import { keycloak } from '@/services/keycloak';

const routes = [
    { path: '/', component: () => import('@/pages/main') },
    { path: '/posts', component: () => import('@/pages/posts') },
    { path: '/about', component: () => import('@/pages/about') },
    { path: '/posts/:id', component: () => import('@/pages/postEdit') },
];

const initializeRouter = () => {
    const router = createRouter({
        history: createWebHistory(),
        routes
    });
    router.beforeEach(async (to) => {
        if (!keycloak.authenticated) {
            await keycloak.login();
            return false;
        }
        try {
            const refreshed = await keycloak.updateToken(60);
            if (refreshed) {
                console.log("Token refreshed");
            }
        } catch (error) {
            console.error('Failed to refresh token', error);
            return keycloak.login();
        }
        return true;
    });
    return router;
};

export { initializeRouter };