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

<script>
import { ref } from 'vue';
import Input from '@/shared/ui/Input.vue';
import Button from '@/shared/ui/Button.vue';
import { taskStore } from '@/shared/lib/store.js';

export default {
  name: 'AddTask',
  components: { Input, Button },
  setup() {
    const newTaskText = ref('');
    const taskInput = ref(null);

    const addTask = () => {
      if (newTaskText.value.trim()) {
        taskStore.addTask(newTaskText.value);
        newTaskText.value = '';
        // Focus back to input for better UX
        // if (taskInput.value) {
        //   taskInput.value.focus();
        // }
      }
    };

    return {
      newTaskText,
      taskInput,
      addTask,
    };
  },
};
</script>

<style scoped>
.add-task {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
