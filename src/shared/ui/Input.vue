<template>
  <input
    class="input"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  name: 'Input',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
};
</script>

<style scoped>
.input {
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 6px;
  width: 100%;
  font-size: 16px;
  transition: all 0.2s ease;
  background-color: white;
}

.input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.input::placeholder {
  color: #6c757d;
  opacity: 0.7;
}

.input:hover {
  border-color: #007bff;
}
</style>
