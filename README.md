# Vue ACL Playground

A Vue 3 project demonstrating two different approaches for implementing role-based access control (ACL) and route authorization.

The purpose of this repository is to compare a library-based solution with a custom implementation and show how permissions can be managed in real-world applications.

---

## Branches

### `main`

Implements authorization using **CASL** (`@casl/ability` and `@casl/vue`).

### `custom-acl`

Implements the same concepts using a fully custom ACL system without external authorization libraries.

This makes it easier to understand the trade-offs between flexibility, maintainability and abstraction levels.

---

## Features

- Role-based access control
- Route protection
- Component-level permissions
- Multiple ACL strategies
- Reusable permission utilities
- Vue Router integration
- Comparison between package-based and custom implementations

---

## Tech Stack

- Vue 3
- Vue Router
- Vite
- TypeScript
- CASL

---

## Project Structure

## Project Structure (FSD)

```text
src/
├── app/              # Application layer (bootstrap)
│   ├── assets/      # Static assets
│   ├── router/      # Vue Router configuration
│   ├── styles/      # Global styles
│   └── main.js      # App entry point
│
├── pages/           # Route-level pages
├── widgets/         # Composite UI blocks (sections)
├── features/        # Business logic features
├── entities/        # Domain models (e.g. user, auth, permissions)
└── shared/          # Reusable utilities, UI kit, helpers
```

### Layer responsibilities

- **app** → bootstrap and config only. No business logic should live here
- **pages** → main pages that define the routes
- **widgets** → composable UI parts (e.g., sidebar, navbar, panels)
- **features** → standalone capabilities (login, ACL rules, guards)
- **entities** → domain models like user / permission
- **shared** → common utilities, reusable components, helpers

---

## Getting Started

### Installation

```bash
git clone <repository-url>
cd vue-acl-practice

npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

---

## Why this project?

Many applications require authorization, but there are multiple ways to implement it.

This repository explores two approaches:

1. Using a dedicated library (CASL).
2. Building a custom permission system from scratch.

The goal is to understand both approaches and their trade-offs rather than relying on a single solution.

---

## License

MIT
