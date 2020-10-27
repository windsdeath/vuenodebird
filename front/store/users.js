export const state = () => ({
    me: null, //로그인여부
    FollowingsList: [],
    FollowersList: [],
    UsersList: [{
            nickname: 'firstUser',
        },
        {
            nickname: 'seccondUser',
        },
        {
            nickname: 'thirdUser',
        },
    ],
})

export const mutations = {
    setMe(state, payload) {
        (payload) ? console.log('Login successful'): console.log('Logout successful');
        state.me = payload;
    },
    changeNickname(state, payload) {
        state.me.nickname = payload.nickname;
    },
    addFollwer(state, payload) {
        state.FollowersList.push(payload);
    },
    addFollwing(state, payload) {
        state.FollowingsList.push(payload);
    },
    removeFollwer(state, payload) {
        const index = state.FollowersList.findIndex(v => v.id === payload.id)
        state.FollowersList.splice(index, 1)
    },
    removeFollwing(state, payload) {
        const index = state.FollowingsList.findIndex(v => v.id === payload.id)
        state.FollowingsList.splice(index, 1);
    },
}

export const actions = {
    signUp({ commit, state }, payload) {
        commit('setMe', payload)
    },
    logIn({ commit, state }, payload) {
        commit('setMe', payload)
    },
    logOut({ commit }, payload) {
        commit('setMe', null)
    },
    changeNickname({ commit }, payload) {
        commit('changeNickname', payload);
    },
    addFollowing({ commit }, payload) {
        commit('addFollowing', payload);
    },
    addFollower({ commit }, payload) {
        commit('addFollower', payload);
    },
    removeFollowing({ commit }, payload) {
        commit('removeFollowing', payload);
    },
    removeFollower({ commit }, payload) {
        commit('removeFollower', payload);
    },
}