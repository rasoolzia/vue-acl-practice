import { reactive, computed } from 'vue';

// Task store
export const taskStore = reactive({
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  filter: 'all', // 'all', 'active', 'completed'

  // Computed properties
  get filteredTasks() {
    switch (this.filter) {
      case 'active':
        return this.tasks.filter((task) => !task.completed);
      case 'completed':
        return this.tasks.filter((task) => task.completed);
      default:
        return this.tasks;
    }
  },

  get activeCount() {
    return this.tasks.filter((task) => !task.completed).length;
  },

  get completedCount() {
    return this.tasks.filter((task) => task.completed).length;
  },

  // Actions
  addTask(text) {
    if (text.trim()) {
      const newTask = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
      };
      this.tasks.push(newTask);
      this.saveToStorage();
    }
  },

  toggleTask(id) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveToStorage();
    }
  },

  deleteTask(id) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.saveToStorage();
  },

  setFilter(filter) {
    this.filter = filter;
  },

  clearCompleted() {
    this.tasks = this.tasks.filter((t) => !t.completed);
    this.saveToStorage();
  },

  // Persistence
  saveToStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  },
});
