<template>
  <div class="main">
    <Header />
    <div class="main-content">
      <div class="left">
        <Sidebar />
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './common/Header.vue';
import Footer from './common/Footer.vue';
import Sidebar from './common/Sidebar.vue';

export default {
  name: 'normal-layout',
  components: {
    Header,
    Footer,
    Sidebar,
  },
};
</script>

<style></style>
