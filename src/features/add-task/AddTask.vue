<template>
  <div class="add-task">
    <Input
      v-model="newTaskText"
      placeholder="Enter a new task"
      @keyup.enter="addTask"
      ref="taskInput"
    />
    <Button @click="addTask" :disabled="!newTaskText.trim()">Add Task</Button>
  </div>
</template>

<script setup>
import { taskStore } from '@/shared/lib/store.js';
import Button from '@/shared/ui/Button.vue';
import Input from '@/shared/ui/Input.vue';
import { ref } from 'vue';

const newTaskText = ref('');
const taskInput = ref(null);

const addTask = () => {
  if (newTaskText.value.trim()) {
    taskStore.addTask(newTaskText.value);
    newTaskText.value = '';
  }
};
</script>

<style scoped>
.add-task {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
