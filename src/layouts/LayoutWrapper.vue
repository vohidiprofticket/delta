<script setup>
import NavbarComponent from "../components/NavbarComponent.vue";
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
</script>
<template>
  <div class="page-init">
    <div class="nav-bar-menu">
      <navbar-component/>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-init{
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100vh;
}
.nav-bar-menu{

}
.main{
  width: 100%;
  height: 100%;
  background: #fafafa;
  overflow-y: auto;
}
</style>