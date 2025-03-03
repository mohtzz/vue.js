import {createStore} from "vuex";

export default createStore ( {
    state: () =>{
        return{
            isAuth: false,
            userLogin: undefined,
            userFirstName: undefined,
            userLastName: undefined,
            userToken: undefined
        }
    },
    getters: {

    },
    mutations: {
        init: (state, {})=>{}
    },
    actions: {

    },
})