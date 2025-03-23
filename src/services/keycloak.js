import Keycloak from 'keycloak-js';

const initOptions = {
    url: 'http://localhost:8282', // URL of the Keycloak server, as an option - read env variable: process.env.VUE_APP_KEYCLOAK_URL
    realm: 'demo', // Name of the realm
    clientId: 'backend' // Client ID you created in Keycloak
};

export const keycloak = new Keycloak(initOptions);

let store = null;

/**
 * Initializes Keycloak, then run callback. This will prompt you to login.
 *
 * @param onAuthenticatedCallback
 */
async function init(onInitCallback) {
    try {
        const authenticated = await keycloak.init({ onLoad: "login-required" });
        onInitCallback(authenticated);
        return authenticated;
    } catch (error) {
        console.error("Keycloak init failed", error);
        throw error;
    }
}

/**
 * Initializes store with Keycloak user data
 *
 */
async function initStore(storeInstance) {
    try {
        store = storeInstance;
        //store.initOauth(keycloak)

        // Show alert if user is not authenticated
        if (!authenticated) { alert("not authenticated") }
    } catch (error) {
        console.error("Keycloak init failed");
        console.error(error);
    }
};

/**
 * Logout user
 */
async function logout(url) {
    return keycloak.logout({ redirectUri: url });
}

async function refreshToken() {
    try {
        const refreshed = await keycloak.updateToken(60);
        if (refreshed) {
            console.log("Token refreshed");
        }
        return keycloak.token;
    } catch (error) {
        console.error('Failed to refresh token');
        console.error(error);
        return null;
    }
}



const KeycloakService = {
    CallInit: init,
    CallInitStore: initStore,
    CallLogout: logout,
    CallTokenRefresh: refreshToken,

};

export default KeycloakService;
