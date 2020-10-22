export const state = () => ({
    mainPosts: []
});

export const mutations = {
    addMainPosts(state, payload) {
        state.mainPosts.unshift(payload);
    },
    removeMainPost(state, payload) {
        const index = state.mainPosts.findIndex(v => v.id === payload.id);
        state.mainPosts.splice(index, 1)
    },
    addComment(state, payload) {
        const index = state.mainPosts.findIndex(v => v.id === payload.postId);
        state.mainPosts[index].Comments.unshift(payload);
    }
};
export const actions = {
    add({ commit }, payload) {
        commit('addMainPosts', payload)
    },
    remove({ commit }, payload) {
        commit('removeMainPost', payload)
    },
    addComment({ commit }, payload) {
        commit('addComment', payload);
    }
};