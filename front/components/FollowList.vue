<template>
  <div>
    <div v-if="f === 1">
      <follow-user-list
        v-for="(user, i) in FollowersList"
        :key="i"
        :userInfo="user"
      ></follow-user-list>
    </div>
    <div v-else-if="f === 2">
      <follow-user-list
        v-for="(user, i) in FollowingsList"
        :key="i"
        :userInfo="user"
      ></follow-user-list>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FollowUserList from '~/components/FollowUserList'

export default {
  props: {
    f: Number,
  },
  computed: {
    ...mapState('users', ['FollowingsList']),
    ...mapState('users', ['FollowersList']),
  },
  components: {
    FollowUserList,
  },
}
</script>

<style></style>
