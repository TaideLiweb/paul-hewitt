<template>
  <div class="home">
    <div id="nav">
      <Header></Header>
    </div>
    <router-view />
  </div>
</template>
<style scoped>
</style>
<script>
import Header from '../components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>
