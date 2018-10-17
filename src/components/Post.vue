<template>
  <div class="post">
    <h3>{{ post.title }}</h3>
    <vue-markdown :source="post.content">
    </vue-markdown>
  </div>

</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'Post',
  components: {
    VueMarkdown
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}

</script>

<style>

</style>
