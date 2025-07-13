<template>
  <div class="home-page">
    <div class="hero">
      <h1>Welcome to Your Todo App</h1>
      <p class="subtitle">Organize your tasks with style and efficiency</p>
      <div class="features">
        <div class="feature">
          <span class="feature-icon">✅</span>
          <h3>Task Management</h3>
          <p>Add, complete, and delete tasks easily</p>
        </div>
        <div class="feature">
          <span class="feature-icon">🔍</span>
          <h3>Smart Filtering</h3>
          <p>Filter tasks by status (All, Active, Completed)</p>
        </div>
        <div class="feature">
          <span class="feature-icon">💾</span>
          <h3>Auto Save</h3>
          <p>Your tasks are automatically saved locally</p>
        </div>
      </div>
      <router-link to="/todo" class="cta-button"> Get Started </router-link>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.hero {
  text-align: center;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.95);
  padding: 60px 40px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

h1 {
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: 700;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 50px;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.feature {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 15px;
}

.feature h3 {
  color: #333;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.feature p {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}

.cta-button {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px 40px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

@media (max-width: 768px) {
  .hero {
    padding: 40px 20px;
  }

  h1 {
    font-size: 2rem;
  }

  .features {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
