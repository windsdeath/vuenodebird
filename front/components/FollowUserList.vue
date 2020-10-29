<template>
  <v-list-item>
    <span>{{ userInfo.nickname }}</span>
    <v-icon @click="onRemoveUser">mdi-minus-circle-outline</v-icon>
  </v-list-item>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
    },
  },
  methods: {
    onRemoveUser(){
      if(this.userInfo.type === 'Following'){
        this.onRemoveFollowing()
      } else if (this.userInfo.type === 'Follower'){
        this.onRemoveFollower()
      }
      
    },
    onRemoveFollower() {
      this.$store.dispatch('users/removeFollower', {
        id: this.userInfo.id,
      })
    },
    onRemoveFollowing() {
      this.$store.dispatch('users/removeFollowing', {
        id: this.userInfo.id,
      })
    },
  },
}
</script>

<style></style>
