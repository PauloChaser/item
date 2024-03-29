<template>
  <router-link
      v-if="to"
      :to="to"
      :class="['button', {'button--active': isActive}]"
  >
    <slot/>
  </router-link>
  <button
      v-else
      :class="['button', {'button--active': isActive}]"
  >
    <slot/>
  </button>
</template>

<script setup lang="ts">
type Props = {
  to: string,
  isActive: boolean
}

defineProps<Props>()
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  padding: 10px 12px;
  width: fit-content;

  font-weight: 500;
  font-size: 14px;
  color: #464646;
  box-shadow: 0 0 10px 0 rgba(70, 70, 70, 0.15);
  background: #fff;
  text-decoration: none;

  transition: all 0.3s ease;
}

.button--active {
  box-shadow: 0 0 10px 0 rgba(70, 70, 70, 0.15);
  background: #e28049;
  color: #ffffff;
}

@media screen and (max-width: 600px){
  .button {
    padding: 11px 12px;
  }
}
</style>