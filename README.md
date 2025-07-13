# 📝 Todo App - Feature-Sliced Design (FSD)

A modern, responsive todo application built with Vue.js 3 and Feature-Sliced Design architecture.

## 🚀 Features

- ✅ **Task Management**: Add, complete, and delete tasks
- 🔍 **Smart Filtering**: Filter tasks by status (All, Active, Completed)
- 💾 **Auto Save**: Tasks are automatically saved to localStorage
- 📱 **Responsive Design**: Works perfectly on desktop and mobile
- 🎨 **Modern UI**: Beautiful gradient design with smooth animations
- 🏗️ **FSD Architecture**: Clean, scalable code structure

## 🏗️ Project Structure (FSD)

```
src/
├── app/                    # Application layer
│   ├── App.vue            # Root component
│   ├── main.js            # App entry point
│   ├── router/            # Routing configuration
│   └── styles/            # Global styles
├── pages/                 # Page layer
│   ├── home/              # Home page
│   └── todo/              # Todo page
├── features/              # Feature layer
│   ├── add-task/          # Add task functionality
│   └── filter-tasks/      # Task filtering functionality
├── entities/              # Entity layer
│   └── task/              # Task entity
└── shared/                # Shared layer
    ├── ui/                # UI components
    └── lib/               # Utilities and store
```

## 🛠️ Technology Stack

- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router 4** - Official router for Vue.js
- **Vite** - Fast build tool and dev server
- **Feature-Sliced Design** - Scalable architecture methodology

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd fsd-vue-ai
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Start the development server:

```bash
pnpm dev
# or
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 FSD Architecture Explained

### App Layer (`src/app/`)

- **Purpose**: Application configuration and setup
- **Contains**: Router setup, global styles, app entry point
- **Dependencies**: Can import from any layer

### Pages Layer (`src/pages/`)

- **Purpose**: Page-level components that compose features
- **Contains**: Home page, Todo page
- **Dependencies**: Can import from features, entities, shared

### Features Layer (`src/features/`)

- **Purpose**: Business logic and user interactions
- **Contains**: Add task, filter tasks
- **Dependencies**: Can import from entities, shared

### Entities Layer (`src/entities/`)

- **Purpose**: Business entities and their logic
- **Contains**: Task entity with its components
- **Dependencies**: Can import from shared

### Shared Layer (`src/shared/`)

- **Purpose**: Reusable code, utilities, and UI components
- **Contains**: UI components, store, utilities
- **Dependencies**: Cannot import from other layers

## 🎯 Key Features Implementation

### State Management

- Uses Vue 3's reactive system for state management
- Centralized store in `src/shared/lib/store.js`
- Automatic localStorage persistence

### Task Operations

- **Add Task**: Enter task text and press Enter or click Add
- **Complete Task**: Click the checkbox to toggle completion
- **Delete Task**: Click the delete button to remove a task
- **Filter Tasks**: Use filter buttons to view different task states

### Responsive Design

- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions

## 🎨 UI Components

### Button Component

- Supports active and disabled states
- Hover animations and transitions
- Customizable styling

### Input Component

- v-model support
- Focus states and animations
- Placeholder styling

### Navigation Component

- Sticky navigation bar
- Active route highlighting
- Responsive design

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Build for Production

```bash
pnpm build
# or
npm run build
```

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes following FSD principles
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Acknowledgments

- Built with [Vue.js](https://vuejs.org/)
- Architecture inspired by [Feature-Sliced Design](https://feature-sliced.design/)
- Icons from [Emoji](https://emojipedia.org/)

---

**Happy coding! 🚀**
