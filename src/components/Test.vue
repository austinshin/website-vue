<template>
  <div>
    <h1>My Todo List!</h1>
    <br>
    <ul>
      <li
        v-for="(item, index) in listItems"
        :key="index"
      >{{ item }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      listItems: ['buy food', 'play games', 'sleep']
    }
  }
}

</script>

<style>

</style>
