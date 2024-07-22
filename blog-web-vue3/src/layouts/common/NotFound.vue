<template>
  <div class="not-found">
    <div class="block-item">
      <div class="item text-center">
        <h1>{{ $t('404') }}</h1>
        <p>{{ $t('common.page-not-found') }}</p>
        <p>{{ $t('common.redirecting-to') }}<a href="/"> {{ $t('common.home') }}</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/style/layout-notfound.scss';

export default {
  name: 'not-found-layout',
};
</script>

<style></style>

