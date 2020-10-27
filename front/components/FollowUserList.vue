<template>
  <v-list-item>
    <span>{{userInfo.nickname}}</span>
    <v-icon @click="onRemoveFollower">mdi-minus-circle-outline</v-icon>
  </v-list-item>
</template>

<script>
export default {
    props:{
        userInfo:{
            type:Object
        }
    },
  computed: {
    methods:{
            onRemoveFollower() {
      this.$store.dispatch('users/removeFollower', {
      })
    },
    }
  },
}
</script>

<style></style>

