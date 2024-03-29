<template>
  <div class="currencies">
    <div class="currencies__filterRow">
      <Input class="currencies__searchInput" placeholder="Search" v-model="searchQuery" type="text"/>
      <div class="currencies__selectWrapper">
        <span class="currencies__selectSubtitle">Currency</span>
        <Select :options="store.getters.CURRENCIES" v-model="selectedBase"/>
      </div>
    </div>

    <div class="currencies__result">
      <ul class="currencies__resultList">
        <li class="currencies__listItem" v-for="(value, key) in filteredList" :key="key">
          <span class="currencies__currencyVal">{{ key }}</span>
          <span class="currencies__rate">{{ value.toFixed(2) }} {{ store.getters.BASE }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch, computed} from 'vue';
import {useStore} from "vuex";
import Input from "@/components/Input.vue";
import Select from "@/components/Select.vue"

const store = useStore();

const selectedBase = ref(store.getters.BASE)
const searchQuery = ref<string>('')

const filteredList = computed(() => {
  if (searchQuery.value.length === 0) {
    return store.getters.RATES;
  }

  const filteredEntries = Object.entries(store.getters.RATES).filter(([key]) => {
    return key.toLowerCase().includes(searchQuery.value.toLowerCase());
  });

  return Object.fromEntries(filteredEntries)
});

watch(selectedBase, (newValue) => {
  store.dispatch('GET_RATES', newValue)
})
</script>

<style scoped>
.currencies {
  margin-top: 32px;
}

.currencies__filterRow {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin-bottom: 8px;
}

.currencies__selectWrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.currencies__selectSubtitle {
  font-weight: 500;
  font-size: 12px;
  color: #838383;
  display: inline-block;
  margin-bottom: 4px;
}

.currencies__resultList {
  padding: 0;
}

.currencies__listItem {
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid rgba(70, 70, 70, 0.25);
  padding: 24px 12px;

  font-weight: 600;
  font-size: 14px;
  color: #464646;
}

@media screen and (max-width: 600px) {
  .currencies__listItem {
    font-size: 16px;
  }
}
</style>