<template>
  <router-view></router-view>
</template>

<script>
import { onMounted } from 'vue';
import router from '@/router/index.js';
export default {
  setup() {
    onMounted(() => {
      // const token = localStorage.getItem('token');
      // if (!token) {
      //   return router.push({path: '/login'});
      // }
    });
  },
};
</script>
