<template>
  <div>
    <follow-user-list v-for="(user, i) in users" :key="i" :userInfo="user"></follow-user-list>
  </div>
</template>

<script>
import FollowUserList from '~/components/FollowUserList'

export default {
  computed:{
       users() {
            return this.$store.state.UsersList
        },

  },
  components: {
    FollowUserList,
  },
}
</script>

<style></style>
