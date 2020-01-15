<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import url("./assets/style/reset.css");
  @import url("./assets/style/common.css");
  #app {
    height: 100%;
  }
</style>
