import Keycloak from 'keycloak-js';

const initOptions = {
    url: 'http://localhost:8080', // URL of the Keycloak server, as an option - read env variable: process.env.VUE_APP_KEYCLOAK_URL
    realm: 'holog', // Name of the realm
    clientId: 'holog-app', // Client ID you created in Keycloak
};

const keycloak = new Keycloak(initOptions);

let authenticated;
let store = null;

/**
 * Initializes Keycloak, then run callback. This will prompt you to login.
 *
 * @param onAuthenticatedCallback
 */
async function init(onInitCallback) {
    try {
        authenticated = await keycloak.init({ onLoad: "login-required" })
        onInitCallback(authenticated)
    } catch (error) {
        console.error("Keycloak init failed")
        console.error(error)
    }
}

/**
 * Initializes store with Keycloak user data
 *
 */
async function initStore(storeInstance) {
    try {
        store = storeInstance
        //store.initOauth(keycloak)

        // Show alert if user is not authenticated
        if (!authenticated) { alert("not authenticated") }
    } catch (error) {
        console.error("Keycloak init failed")
        console.error(error)
    }
};

/**
 * Logout user
 */
async function logout(url) {
    return keycloak.logout({ redirectUri: url });
}

/**
 * Refreshes token
 */
async function refreshToken() {
    try {
        return keycloak.updateToken(60); // update if expired in one minute
    } catch (error) {
        console.error('Failed to refresh token');
        console.error(error);
    }
}

const KeycloakService = {
    CallInit: init,
    CallInitStore: initStore,
    CallLogout: logout,
    CallTokenRefresh: refreshToken

};

export default KeycloakService;
