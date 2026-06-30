# Angular Product Manager

A product management application built with **Angular 19** and a JSON Server mock backend.

## Prerequisites

- Node.js >= 20.16
- npm >= 10.8

## Getting Started

```bash
# 1. Install dependencies
npm install
npm install --loglevel verbose

# 2. Start the mock server (JSON Server) — terminal 1
npm run mock-server

# 3. Start the Angular app — terminal 2
npm start
```

The app will be available at **http://localhost:4200**.
The mock API runs on **http://localhost:3000**.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the dev server (port 4200) |
| `npm run mock-server` | Start JSON Server (port 3000) |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint + Stylelint |
| `npm test` | Run unit tests (Karma) |

## Features

- List products with filtering
- View product details
- Create / edit / delete products
- Shopping cart (add, remove, total)
