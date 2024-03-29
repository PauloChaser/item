<template>
  <div class="customSelect" @click="toggleDropdown">
    <div class="selectedOption">{{ modelValue }}
      <span class="arrowWrapper" :class="{'active': showDropdown}">
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1L6 6L1 1" stroke="#464646" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </div>
    <div class="dropdown" :class="{'active': showDropdown}">
      <ul class="optionList">
        <li class="listItem" v-for="(_, option) in options" :key="option" @click.stop="handleClick(option)">
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

type Props = {
  options: Record<string, string>
  modelValue: string
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const showDropdown = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

function handleClick(option: string) {
  emit('update:modelValue', option)
  showDropdown.value = false;
}
</script>


<style scoped>
.customSelect {
  box-shadow: 0 0 10px 0 rgba(70, 70, 70, 0.15);
  background: #fff;
  border-radius: 8px;
  padding: 10px 16px;
  min-width: 75px;
  position: relative;
  cursor: pointer;

  font-weight: 400;
  font-size: 12px;
  color: #464646;
}

.selectedOption {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 10px;
}


.arrowWrapper {
  cursor: pointer;
  display: flex;
  transition: transform 0.3s ease;
}

.arrowWrapper.active {
  transform: scale(-1);
}

.dropdown {
  margin: 8px 0 0;
  padding: 0;
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  z-index: 1000;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(70, 70, 70, 0.15);
  box-sizing: border-box;
  transform-origin: top;
  transform: scaleY(0);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.dropdown.active {
  transform: scaleY(1);
  opacity: 1;
  transition: transform 0.3s ease;
}

.optionList {
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.listItem {
  padding: 8px 16px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.listItem:hover {
  background: rgba(226, 128, 73, 1);
  color: #ffffff;
}
</style>
