<template>
   <HeaderAdmin/>
   <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3">
          Sider-bar
      </div>
      <div class="col-lg-9">
        <router-view></router-view>
      </div>
    </div>
   </div>
</template>

<script>
import HeaderAdmin from '../components/Header-admin.vue';

export default {
  components: {HeaderAdmin}
}
</script>