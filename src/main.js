import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import components from "@/components/UI"
import KeycloakService, { keycloak } from '@/services/keycloak';
import store from '@/state';
import { initializeRouter } from '@/router/router'

async function bootstrapApp() {
    try {
        const authenticated = await KeycloakService.CallInit((auth) => {
            if (!auth) {
                console.info("Auth failed, reloading...");
                window.location.reload();
            }
        });
        if (authenticated) {
            const app = createApp(App);
            components.forEach(component => {
                app.component(component.name, component);
            });

            const router = initializeRouter();
            
            app.use(router)
               .use(store)
               .use(vuetify)
               .mount('#app');

            setInterval(async () => {
                try {
                    const refreshed = await keycloak.updateToken(70);
                    if (refreshed) {
                        console.info('Token refreshed');
                    }
                } catch (error) {
                    console.error('Failed to refresh token', error);
                }
            }, 400000);
        }
    } catch (error) {
        console.error("Application bootstrap failed:", error);
    }
}

bootstrapApp();