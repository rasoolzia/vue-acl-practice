<template>
  <h6>fund details</h6>
  <div>{{ fund }}</div>
</template>

<script setup>
defineProps({
  fund: {
    type: Object,
    required: true,
  },
});
</script>
