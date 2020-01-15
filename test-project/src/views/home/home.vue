<template>
  <div
        class="home"
       :style="{
        background: bgColorStyles[bgIndex].background
      }"
  >
    <div>
      我是home组件{{bgIndex}}
    </div>
    <div class="menu">
      <template v-for="(bg, i) in bgColorStyles">
        <div class="item-bg" :style="{background: bg.background}" @click="setBackground(i)">
        </div>
      </template>
    </div>
  </div>
</template>

<script>
// import {getReadInfo} from '../../api/index.js'
import Vue from 'vue'
import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'Home',
    data () {
      return {
        bookContent: '',
        flag: false,
        bgColorStyles: [
          {
            menuColor: "rgba(247,247,247,1)",
            background: "rgba(255,255,255,1)",
            color: "rgba(43, 49, 51, 1)"
          },
          {
            menuColor: "rgba(247,247,247,1)",
            background: "rgba(245,219,228,1)",
            color: "rgba(43, 49, 51, 1)"
          },
          {
            menuColor: "rgba(247,247,247,1)",
            background: "rgba(217,239,215,1)",
            color: "rgba(43, 49, 51, 1)"
          },
          {
            menuColor: "rgba(247,247,247,1)",
            background: "rgba(255,247,223,1)",
            color: "rgba(43, 49, 51, 1)"
          },
          {
            menuColor: "rgba(247,247,247,1)",
            background:"rgba(22,22,22,1)",
            color:"rgba(43, 49, 51, 1)",
          }
        ]
      }
    },
    created() {
    },
    computed: {
      ...mapGetters('reader', ['bgIndex'])
    },
    methods: {
      ...mapActions('reader', ['setOptions']),
      setBackground(i) {
        this.setOptions({name: "bgIndex", value: i});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100%;
    background: gold;
    .menu {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 200px;
      background-color: #ccc;
    }
    .item-bg {
      width: 68px;
      height: 68px;
      margin-right: 20px;
      border-radius: 34px;
      position: relative;
      box-sizing: border-box;
    }
  }
</style>
