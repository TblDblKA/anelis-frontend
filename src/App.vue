<template>
  <div id="app" ref="app">
    <vue-custom-scrollbar
        class="scroll-area"
        :settings="settings"
        :suppressScrollX="true"
        tagname="div"
    >
      <div class="wrapper">
        <page-header/>
        <router-view/>
        <page-bottom/>
      </div>
    </vue-custom-scrollbar>
  </div>
</template>

<script>
import PageHeader from 'components/project/page-header.vue'
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"

import PageBottom from "components/project/page-bottom";

export default {
  name: 'App',
  components: {
    PageBottom,
    PageHeader,
    vueCustomScrollbar
  },
  data () {
    return {
      isLoaded: false,
      settings: {
        suppressScrollY: false,
        suppressScrollX: true,
        wheelPropagation: true
      }
    }
  },
  mounted () {
    document.addEventListener("DOMContentLoaded", () => { this.isLoaded = true });
    document.body.addEventListener("wheel", e=>{
      if(e.ctrlKey)
        e.preventDefault();
    }, {
      passive: false
    })
    document.body.addEventListener("keydown", event => {
      if (event.ctrlKey === true && (
          event.keyCode === 61 || event.keyCode === 107 || event.keyCode === 173 || event.keyCode === 109  || event.keyCode === 187  ||
          event.keyCode === 189)) {
        event.preventDefault();
      }
    }, {
      passive: false
    })
  }
}
</script>

<style>
#app {
  font-family: SFProLight, serif;
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFF9F9;
  width: 100vw;
  height: 100vh;
  background-color: #131315;
  padding: 0;
  display: block;
  float: left;
  /* height: 100%; */
  /*vertical-align: top;*/
}

body {
  margin: 0 !important;
}


.scroll-area {
  position: relative;
  margin: auto;
  height: 100%;
}

.active-link {
  text-decoration: underline;
}
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
