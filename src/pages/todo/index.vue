<template>
  <div class="todo-page">
    <h1>To-Do List</h1>
    <AddTask v-if="canPerform('FundAdd')" />

    <FilterTasks v-if="canPerform('FundFilter')" />
    <div style="margin-bottom: 10px" v-else>
      <h3 style="color: brown">
        you just can add or see task list not filtering them
      </h3>
      <p>Please contact support for promoting you to admin for access.</p>
    </div>

    <div class="task-list">
      <div v-if="taskStore.filteredTasks.length === 0" class="empty-state">
        <div class="empty-icon">📝</div>
        <p v-if="taskStore.tasks.length === 0">
          No tasks yet! Add your first task above.
        </p>
        <p v-else>No {{ taskStore.filter }} tasks found.</p>
      </div>

      <TaskItem
        v-for="task in taskStore.filteredTasks"
        :key="task.id"
        :task="task"
      />
    </div>

    <div class="todo-stats" v-if="taskStore.tasks.length > 0">
      <p>
        {{ taskStore.activeCount }} active,
        {{ taskStore.completedCount }} completed
      </p>
    </div>
  </div>
</template>

<script>
import AddTask from '@/features/add-task/AddTask.vue';
import FilterTasks from '@/features/filter-tasks/FilterTasks.vue';
import TaskItem from '@/entities/task/TaskItem.vue';
import { taskStore } from '@/shared/lib/store.js';
import { useAbility } from '@/shared/composables/useAbility';

export default {
  name: 'TodoPage',
  components: { AddTask, FilterTasks, TaskItem },
  setup() {
    const { canPerform } = useAbility();
    return {
      taskStore,
      canPerform,
    };
  },
};
</script>

<style scoped>
.todo-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 2.5rem;
  font-weight: 300;
}

.task-list {
  margin-top: 20px;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.empty-state {
  text-align: center;
  padding: 40px 20px;
  color: #6c757d;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.empty-state p {
  font-size: 16px;
  margin: 0;
}

.todo-stats {
  text-align: center;
  margin-top: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  color: #6c757d;
  font-size: 14px;
}
</style>
