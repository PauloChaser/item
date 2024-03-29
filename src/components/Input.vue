<template>
  <input
      class="input"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
  >
</template>

<script setup lang="ts">
type Props = {
  placeholder: string
} &
    ({
      type: 'number'
      modelValue: number
    } | {
      type: 'text'
      modelValue: string
    });

defineProps<Props>();
</script>

<style scoped>
.input {
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  padding: 11px 12px;

  font-weight: 400;
  font-size: 12px;
  color: #464646;
  box-shadow: 0 0 10px 0 rgba(70, 70, 70, 0.15);
  background: #fff;
  border: 1px solid transparent;

  transition: 0.1s ease;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield; /* Firefox */
}

.input::placeholder {
  color: #838383;
}

.input.input:focus,
.input.input:active {
  border-color: #e28049;
}

@media screen and (max-width: 600px) {

}
</style>