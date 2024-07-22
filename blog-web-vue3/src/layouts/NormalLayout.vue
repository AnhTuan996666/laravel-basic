<template>
  <div class="main">
    <TheHeader />
    <div class="main-content">
      <div class="left">
        <TheSidebar />
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './common/Header.vue';
import TheFooter from './common/Footer.vue';
import TheSidebar from './common/Sidebar.vue';

export default {
  name: 'normal-layout',
  components: {
    TheHeader,
    TheFooter,
    TheSidebar,
  },
};
</script>

<style></style>
