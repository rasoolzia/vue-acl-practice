<template>
  <nav class="navigation">
    <div class="nav-container">
      <router-link to="/" class="nav-brand"> 📝 Todo App </router-link>
      <div class="nav-links">
        <router-link to="/" class="nav-link" active-class="active">
          Home
        </router-link>
        <router-link
          to="/todo"
          class="nav-link"
          active-class="active"
          v-if="$can('access', 'Todo')"
        >
          Tasks
        </router-link>
        <router-link
          to="/fund"
          class="nav-link"
          active-class="active"
          v-if="$can('access', 'Fund')"
        >
          Funds
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navigation {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
  margin-bottom: 20px;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-brand:hover {
  color: #667eea;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: #666;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #333;
  background-color: rgba(102, 126, 234, 0.1);
}

.nav-link.active {
  color: #667eea;
  background-color: rgba(102, 126, 234, 0.1);
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0 15px;
  }

  .nav-brand {
    font-size: 1.2rem;
  }

  .nav-links {
    gap: 10px;
  }

  .nav-link {
    padding: 6px 12px;
    font-size: 14px;
  }
}
</style>
