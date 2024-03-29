<template>
  <div class="converter">
    <div class="converter__half">
      <span class="converter__subtitle">From</span>
      <div class="converter__inputs">
        <Input class="converter__input" placeholder="Value" v-model="fromValue" type="number" />
        <Select class="converter__select" v-model="selectedFrom" :options="store.getters.CURRENCIES" />
      </div>
    </div>
    <div class="converter__half">
      <span class="converter__subtitle">To</span>
      <div class="converter__inputs">
        <Input class="converter__input" placeholder="Value" v-model="toValue" type="number" />
        <Select class="converter__select" v-model="selectedTo" :options="store.getters.CURRENCIES" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useStore} from "vuex";
import Input from "@/components/Input.vue";
import Select from "@/components/Select.vue";
import {computed, ref, watch} from "vue";

const store = useStore()
const selectedFrom = ref('USD')
const selectedTo = ref('RUB')

const fromValue = ref(1)

const toValue = computed({
  get() {
    return fromValue.value * store.getters.CONVERTER_RATE
  },
  set(newValue) {
    fromValue.value = Number(newValue) / store.getters.CONVERTER_RATE
  }
})

watch([selectedFrom, selectedTo], ([selectedFromNew, selectedToNew]) => {
  store.dispatch('GET_CONVERTER_RATE', {
    from: selectedFromNew,
    to: selectedToNew
  })
}, {
  immediate: true
})

</script>

<style scoped>
.converter {
  display: flex;
  grid-gap: 32px;
  margin-top: 32px;
}

.converter__half {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.converter__subtitle {
  font-weight: 500;
  font-size: 12px;
  color: #484848;

  margin-bottom: 4px;
  width: fit-content;
}

.converter__inputs {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 8px;
}

.converter__input {

}

@media screen and (max-width: 600px) {
  .converter {
    flex-direction: column;
  }
}

@media screen and (max-width: 500px) {
  .converter {
    flex-direction: column;
  }

  .converter__inputs {
    width: 100%;

  }

  .converter__input {
    flex-grow: 2;
    transition: all 0.3s ease;
  }
}
</style>