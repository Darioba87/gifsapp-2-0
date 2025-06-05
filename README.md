# GifsApp

GifsApp is a web application built with Angular 19 that allows users to search, view trending, and manage GIFs using the Giphy API.

## Features

- **Trending GIFs:** Browse the most popular GIFs.
- **Search GIFs:** Find GIFs by name, description, or tags.
- **Search History:** Quickly revisit previous searches.
- **Responsive UI:** Modern design with Tailwind CSS.
- **Persistent History:** Search history is saved in local storage.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Angular CLI](https://angular.dev/tools/cli) (`npm install -g @angular/cli`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Darioba87/gifsapp-2-0.git
   cd gifs-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server:
```bash
ng serve
```
or

```bash
ng serve -o
```
Navigate to [http://localhost:4200/](http://localhost:4200/) in your browser. The app reloads automatically on code changes.

### Building

To build the project for production:
```bash
ng build
```
The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

To execute unit tests via [Karma](https://karma-runner.github.io):
```bash
ng test
```

## Project Structure

- `src/app/` – Main application code
  - `gifs/` – GIFs feature modules, components, services, and interfaces
  - `environments/` – Environment configuration files
- `public/` – Static assets

## Configuration

API keys and endpoints are managed in [`src/environments/environment.ts`](src/environments/environment.ts).

## Additional Resources

- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [Giphy API Documentation](https://developers.giphy.com/docs/api/)

---
Generado con ❤️ usando Angular 19 y Tailwind CSS.

## Autor
Dario Brito Alvarez
