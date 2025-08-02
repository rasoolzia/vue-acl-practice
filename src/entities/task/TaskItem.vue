<template>
  <div class="task-item fade-in" :class="{ completed: task.completed }">
    <div class="task-content">
      <input
        type="checkbox"
        :checked="task.completed"
        @change="toggleTask"
        class="task-checkbox"
      />
      <span class="task-text">{{ task.text }}</span>
    </div>
    <div class="task-actions">
      <span class="task-date">{{ formatDate(task.createdAt) }}</span>
      <Button
        @click="deleteTask"
        class="delete-btn"
        v-if="canPerform('FundDelete')"
        >Delete</Button
      >
    </div>
  </div>
</template>

<script>
import Button from '@/shared/ui/Button.vue';
import { taskStore } from '@/shared/lib/store.js';
import { useAbility } from '@/shared/composables/useAbility';

export default {
  name: 'TaskItem',
  components: { Button },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { canPerform } = useAbility();
    const toggleTask = () => {
      taskStore.toggleTask(props.task.id);
    };

    const deleteTask = () => {
      taskStore.deleteTask(props.task.id);
    };

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    };

    return {
      canPerform,
      toggleTask,
      deleteTask,
      formatDate,
    };
  },
};
</script>

<style scoped>
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border-bottom: 1px solid #eee;
  transition: all 0.3s ease;
}

.task-item:hover {
  background-color: #f8f9fa;
}

.task-item.completed {
  opacity: 0.7;
}

.task-content {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}

.task-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.task-text {
  font-size: 16px;
  word-break: break-word;
}

.task-item.completed .task-text {
  text-decoration: line-through;
  color: #6c757d;
}

.task-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.task-date {
  font-size: 12px;
  color: #6c757d;
}

.delete-btn {
  background-color: #dc3545;
  padding: 4px 8px;
  font-size: 12px;
}

.delete-btn:hover {
  background-color: #c82333;
}
</style>
