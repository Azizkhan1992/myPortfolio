<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>
import Main from './components/main.vue';
export default {
  name: 'App',
  components: {
    Main
  },
  data(){
    return{
      title: 'Портфолио'
    }
  },
  mounted(){
    document.title = this.title
  }
}
</script>

<style>

</style>
