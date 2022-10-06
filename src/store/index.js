// import { defineStore } from "pinia";

import { createStore } from "vuex";


export default createStore({
    state:{
        users: []
    },
    mutations: {
        'ADICIONAR_USUARIO'(state, usuario) {
            const user = {
                name: usuario.name,
                phone: usuario.phone
            }

            state.users.push(user)
        } 
    }
})

