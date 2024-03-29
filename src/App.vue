<template>

  <nav class="navigation">
    <LinkButton to="/" :is-active="isActive('/')">Валюты</LinkButton>
    <LinkButton to="/converter" :is-active="isActive('/converter')">Конвертер</LinkButton>
  </nav>

  <transition name="slide-fade">
    <router-view/>
  </transition>

</template>

<script setup lang="ts">
import {useRoute} from 'vue-router';
import LinkButton from "@/components/LinkButton.vue";
import {onMounted} from "vue";
import {useStore} from "vuex";

const route = useRoute();
const store = useStore()

onMounted(() => {
  store.dispatch('GET_INITIAL_DATA')
})

const isActive = (path: string) => {
  return route.path === path;
};
</script>


<style>
* {
  box-sizing: border-box;
}

#app {

  max-width: 1120px;
  padding: 40px 80px;
  width: 100%;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 12px;
}

.routerLink {
  text-decoration: none;
}


.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

@media screen and (max-width: 991px) {
  #app {
    padding: 24px 32px;
  }
}

@media screen and (max-width: 600px) {
  #app {
    padding: 32px 16px;
  }
}
</style>
