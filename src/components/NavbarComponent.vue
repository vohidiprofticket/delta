<script setup>
import {onMounted, ref} from 'vue'
import {useRoute, useRouter} from "vue-router";
import {useGlobalSettings} from "@/stores/globalSettings.js";
const currentRoute=ref('about-me')
const router = useRouter()
const route=useRoute()
const global=useGlobalSettings()
async function handleClickMenu(pageName){
  await router.push({name: pageName})
  global.currentRoute = route.name
}
</script>

<template>
  <div class="nav-bar">
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="Кадры">
    </div>
    <div class="menu-list">
      <div class="menu-categories">
        <div class="menu-header">
          Профиль
        </div>
        <div
            @click="handleClickMenu('about-me')"
            class="menu-item"
            :class="{'active' : global.currentRoute === 'about-me'}"
        >
          Обо мне
        </div>
        <div
            @click="handleClickMenu('documents')"
            class="menu-item"
            :class="{'active' : global.currentRoute === 'documents'}"
        >
          Документы
        </div>
      </div>
      <div class="menu-categories">
        <div class="menu-header">
          Моя работа
        </div>
        <div
            @click="handleClickMenu('objects')"
            class="menu-item"
            :class="{'active' : global.currentRoute === 'objects'}"
        >
          Объекты
        </div>
        <div
            @click="handleClickMenu('calendar')"
            class="menu-item"
            :class="{'active' : global.currentRoute === 'calendar'}"
        >
          Календарь работ
        </div>
        <div
            @click="handleClickMenu('reviews')"
            class="menu-item"
            :class="{'active' : global.currentRoute === 'reviews'}"
        >
          Отклики
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.nav-bar{
  width: 240px;
  height: 100%;
  background: rgba(0,0,0,0.87);
  padding: 8px;
  box-sizing: border-box;
}
.logo{
  padding-left: 24px;
  padding-top: 27px;
  padding-bottom: 19px;
  img{
    width: 140px;
  }
}
.menu-list{
  .menu-categories{
    margin-top: 16px;
    .menu-header{
      font-size: 12px;
      line-height: 1.2;
      font-weight: 400;
      color: #5F5F5F;
      padding: 8px 16px;
      box-sizing: border-box;
    }
    .menu-item{
      height: 40px;
      font-size: 14px;
      line-height: 1.5;
      font-weight: 600;
      color: rgba(255,255,255,0.6);
      padding: 8px 16px;
      box-sizing: border-box;
      cursor: pointer;
      transition: all 0.3s;
      border-radius: 4px;
      margin-bottom: 4px;
      &.active{
        color: rgba(255,255,255,1);
        transition: all 0.3s;
        background: #5F5F5F;
      }
      &:hover{
        transition: all 0.3s;
        color: rgba(255,255,255,1);
        background: #5F5F5F88;
        box-sizing: border-box;
      }
    }
  }
}
</style>