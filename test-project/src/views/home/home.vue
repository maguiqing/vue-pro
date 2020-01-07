<template>
  <div class="home">
    我是home11111111111
  </div>
</template>

<script>
import {getReadInfo} from '../../api/index.js'
  export default {
    name: 'Home',
    data () {
      return {
        bookContent: ''
      }
    },
    created() {
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    width: 100%;
    height: 200px;
    background-color: gold;
  }
</style>
