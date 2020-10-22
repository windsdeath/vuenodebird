export const state =()=>({
    me:null //로그인여부
})

export const mutations = {
    setMe(state, payload){
        (payload)?console.log('Login successful'):console.log('Logout successful');
        state.me = payload;
    }
}

export const actions = {
    signUp({commit, state}, payload){
        commit('setMe', payload)
    },
    logIn({commit, state}, payload){
        commit('setMe', payload)
    },
    logOut({commit}, payload){
        commit('setMe', null)
    }
}