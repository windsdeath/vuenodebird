//로그인 안한사용자인지 검사
export default function({ store, redirect }) {
    if (store.state.users.me) {
        redirect('/');
    }
}