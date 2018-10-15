<template>
  <div>
    <h1>My Todo List!</h1>
    </br>
    <ul>
      <li v-for="item in listItems">{{ item }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      listItems: ['buy food', 'play games', 'sleep']
    }
  }
}

</script>

<style lang='stylus'>

</style>
