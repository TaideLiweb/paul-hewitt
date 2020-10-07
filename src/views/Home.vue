<template>
  <div class="home">
    <div id="nav">
      <Header></Header>
    </div>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<style scoped>
</style>
<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
