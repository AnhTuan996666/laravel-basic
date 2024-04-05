<template>
    <router-view></router-view>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();

    onMounted(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
      }
    });
  },
};
</script>
