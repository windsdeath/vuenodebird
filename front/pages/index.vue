<template>
  <v-container>
    <post-form v-if="me"></post-form>
    <div>
      <post-card />
      <post-card />
      <post-card />
      <post-card />
      <post-card />
    </div>
  </v-container>
</template>

<script>
import PostCard from '~/components/PostCard';
import PostForm from '~/components/PostForm';

export default {
  components: {
    PostCard,
    PostForm
  },
  data() {
    return {
      name: 'Nuxt.js',
    }
  },
  computed: {
    me() {
      this.$store.state.user.me
    },
  },
}
</script>

<style></style>
