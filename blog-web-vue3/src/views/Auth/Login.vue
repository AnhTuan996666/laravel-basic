<template>
  <div class="login">
    {{ $t('login.btn_login') }}
      <LanguageVue />
  </div>
</template>

<script>
import '@/assets/style/pages/login.scss';
import LanguageVue from '@/components/Language.vue';

export default {
  name: 'login-page',
  components: {
    LanguageVue
  },
  setup() {
  
    return {
    };
  },
};
</script>

<style>

</style>

