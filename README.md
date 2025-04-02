# Dcycle Frontend

<p align="center">
  <img src="https://img.shields.io/badge/Dcycle-Frontend-22C55E?style=for-the-badge" alt="Dcycle Frontend" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/node-v22+-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js Version" />
</p>

A humble Name information and Covid Data Display React application built with TypeScript, Vite, and TailwindCSS.

## Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/-React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="React Query" />
  <img src="https://img.shields.io/badge/-React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/-Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/-Recharts-22b5bf?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMjZoNHYxMGgtNHpNMjQgMjNoNHYxM2gtNHpNMTggMThoNHYxOGgtNHoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTkuNjkzIDYuMjMzbDkuNjg4IDExLjQ2Mi0zLjA2OCAyLjU5My05LjY4OC0xMS40NjJ6TTkuNjkzIDE1LjIzM2w5LjY4OCAxMS40NjItMy4wNjggMi41OTMtOS42ODgtMTEuNDYyeiIvPjwvc3ZnPg==" alt="Recharts" />
  <img src="https://img.shields.io/badge/-Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />
  <img src="https://img.shields.io/badge/-date--fns-F7B93E?style=for-the-badge&logo=javascript&logoColor=black" alt="date-fns" />
  <img src="https://img.shields.io/badge/-Sonner-E25A1C?style=for-the-badge&logo=javascript&logoColor=white" alt="Sonner" />
  <img src="https://img.shields.io/badge/-ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/-Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" alt="Prettier" />
  <img src="https://img.shields.io/badge/-Husky-000000?style=for-the-badge&logo=git&logoColor=white" alt="Husky" />
</p>

- React 19
- TypeScript
- Vite
- TailwindCSS
- React Query
- React Router DOM
- Axios
- Sonner (Toast notifications)
- date-fns (Date manipulation)
- Recharts (Data visualization)
- Postman Collection (API documentation)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm
- Docker (optional)

### Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

1. Build the application:

```bash
npm run build
```

2. Preview the production build:

```bash
npm run preview
```

3. Adding a different VITE_API_URL value:

Change VITE_API_URL if using a deployed API URL.

### Docker

You can run the application using Docker in two ways:

1. Build and run manually:

```bash
# Build the Docker image
docker build -t dcycle-frontend .

# Run the container
docker run -p 3000:3000 dcycle-frontend
```

2. Using npm scripts:

```bash
# Build the Docker image
npm run docker:build

# Run the container
npm run docker:run
```

The application will be available at `http://localhost:3000` when running in Docker.

### Other Available Scripts

- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

The project follows a modern React application structure with the following key features:

- TypeScript for type safety
- ESLint and Prettier for code quality
- Husky for git hooks
- TailwindCSS for styling
- React Query for RPC state management
- React Router for navigation
- Sonner for toast notifications
- date-fns for date manipulation and formatting
- Recharts for data visualization
- Postman collection for API documentation and testing

## API Documentation

The project includes a Postman collection (`Dcycle.postman_collection.json`) that documents all available API endpoints. This collection can be imported into Postman to test the API endpoints and includes:

- Name-based endpoints (gender, nationality, age prediction)
- COVID-19 data endpoints
- Historical data endpoints

The collection uses environment variables for base URL configuration, making it easy to switch between different environments.
