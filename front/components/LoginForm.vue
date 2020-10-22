<template>
<v-container v-if="!me">
    <v-card>
        <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
            <v-container>
                <v-text-field v-model="email" :rules="emailrules" label="이메일" type="email" required />
                <v-text-field v-model="password" label="비밀번호" type="password" required />
                <v-btn color="green" type="submit" @click="onLogIn">로그인</v-btn>
                <v-btn nuxt to="/signup">회원가입</v-btn>
            </v-container>
        </v-form>
    </v-card>
</v-container>
<v-container v-else>
    <v-card>{{ me.nickname }}님이 로그인 되었습니다.
        <v-btn @click="onLogOut">로그아웃</v-btn>
    </v-card>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            valid: false, //유효성검사
            email: '',
            password: '',
            emailrules: [
                (v) => !!v || '이메일은 필수입니다.',
                (v) => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.',
            ],
            passwordRules: [(v) => !!v || '패스워드는 필수입니다.'],
        }
    },
    computed: {
        me() {
            return this.$store.state.users.me
        },
    },
    methods: {
        onSubmitForm() {
            this.$refs.form.validate()
        },
        onLogOut() {
            this.$store.dispatch('users/logOut')
        },
        onLogIn() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('users/logIn', {
                    nickname: this.email,
                    email: this.email,
                })
            } else {
                alert('아이디와 패스워드를 확인해주세요 !')
            }
        },
    },
}
</script>

<style></style>
