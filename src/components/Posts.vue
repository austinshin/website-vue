<template>
  <div class="posts">
    <Post
      v-for="(post, index) in posts"
      :key="index"
      :post="post"
      >
    </Post>
  </div>

</template>

<script>
import Post from './Post';
export default {
  name: 'Posts',
  components: {
    Post
  },
  data () {
    return {
      posts: [
        { title: 'Post1', content: 'i am a ~~tast~~ **test**' },
        { title: 'Post2', content: '' },
        { title: 'Post3', content: 'agasakfof'}
      ]
    }
  }

}

</script>

<style scoped>

</style>
