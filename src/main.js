import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import components from "@/components/UI"
import router from "@/router/router";
import keycloakService from '@/services/keycloak';
import store from '@/state';

keycloakService.CallInit((auth) => {
    if (!auth) {
        console.info("auth is false, reload");
        window.location.reload();
    } else {
        console.info("Authenticated ");

        const app = createApp(App);
        components.forEach(component => {
            app.component(component.name, component)
        });
        app
            .use(router)
            .use(store)
            .use(vuetify)
            .mount('#app')
    }

}).catch(() => {
    console.error("Authenticated Failed");
});
/**
 * keycloak.init({ onLoad: 'login-required' }).then((auth) => {
 *     if (!auth) {
 *         console.info("auth is false, reload");
 *         window.location.reload();
 *     } else {
 *         console.info("Authenticated ");
 *         console.log(keycloak.tokenParsed);
 *
 *         const app = createApp(App);
 *         components.forEach(component => {
 *             app.component(component.name, component)
 *         });
 *         app
 *             .use(router)
 *             .use(store)
 *             .mount('#app')
 *     }
 *
 *     // Token Refresh
 *     setInterval(() => {
 *         console.info("before update token");
 *         keycloak.updateToken(70).then((refreshed) => {
 *             if (refreshed) {
 *                 console.info('Token refreshed' + refreshed + ' ' + keycloak.tokenParsed);
 *             } else {
 *                 console.warn('Token not refreshed, valid for '
 *                     + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
 *             }
 *         }).catch(() => {
 *             console.error('Failed to refresh token');
 *         });
 *     }, 400000);
 *
 * }).catch(() => {
 *     console.error("Authenticated Failed");
 * });
 */