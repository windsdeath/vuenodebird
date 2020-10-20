<template>
    <v-app>
        <div>
            <v-toolbar dark color="green">
                <v-toolbartitle>
                    <nuxt-link to="/">Nodebird</nuxt-link>
                </v-toolbartitle>
            </v-toolbar>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-text-field>
                    <v-btn text nuxt to="/profile">
                        <div>프로필</div>
                    </v-btn>
                    <v-btn text nuxt to="/profile">
                        <div>회원가입</div>
                    </v-btn>
                </v-text-field>
            </v-toolbar-items>
        </div>
    </v-app>
</template>

<script>
export default {

}
</script>

<style>
a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
}
</style>

