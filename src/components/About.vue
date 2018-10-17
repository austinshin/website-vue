<template>
  <div class="About">
    <h1>{{ title }}</h1>
    <p>
      This is the about page.
      Put shit here.
    </p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      title: 'About'
    }
  },
  created () {
    console.log('I got created!')
  }
}

</script>

<style scoped>
h1 {
  color: black;
  font-size: 20px;
}
</style>
