# Dcycle Frontend

A humble React application built with TypeScript, Vite, and TailwindCSS.

## Tech Stack

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
