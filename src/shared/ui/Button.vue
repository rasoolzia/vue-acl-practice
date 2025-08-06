<template>
  <button
    class="btn"
    :class="{
      'btn--active': active,
      'btn--disabled': disabled,
    }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.btn {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
  font-weight: 500;
}

.btn:hover:not(:disabled) {
  background-color: #0056b3;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.btn--active {
  background-color: #28a745;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.btn--active:hover {
  background-color: #218838;
}

.btn--disabled {
  background-color: #6c757d;
  cursor: not-allowed;
  opacity: 0.6;
}

.btn--disabled:hover {
  background-color: #6c757d;
  transform: none;
  box-shadow: none;
}
</style>
