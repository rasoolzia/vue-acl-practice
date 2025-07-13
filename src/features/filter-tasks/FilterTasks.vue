<template>
  <div class="filter-tasks">
    <div class="filter-buttons">
      <Button
        :class="{ active: taskStore.filter === 'all' }"
        @click="setFilter('all')"
      >
        All ({{ taskStore.tasks.length }})
      </Button>
      <Button
        :class="{ active: taskStore.filter === 'active' }"
        @click="setFilter('active')"
      >
        Active ({{ taskStore.activeCount }})
      </Button>
      <Button
        :class="{ active: taskStore.filter === 'completed' }"
        @click="setFilter('completed')"
      >
        Completed ({{ taskStore.completedCount }})
      </Button>
    </div>
    <div class="actions" v-if="taskStore.completedCount > 0">
      <Button @click="clearCompleted" class="clear-btn">
        Clear Completed
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '@/shared/ui/Button.vue';
import { taskStore } from '@/shared/lib/store.js';

export default {
  name: 'FilterTasks',
  components: { Button },
  setup() {
    const setFilter = (filter) => {
      taskStore.setFilter(filter);
    };

    const clearCompleted = () => {
      taskStore.clearCompleted();
    };

    return {
      taskStore,
      setFilter,
      clearCompleted,
    };
  },
};
</script>

<style scoped>
.filter-tasks {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.filter-buttons {
  display: flex;
  gap: 10px;
}

.actions {
  display: flex;
  gap: 10px;
}

.clear-btn {
  background-color: #dc3545;
}

.clear-btn:hover {
  background-color: #c82333;
}
</style>
