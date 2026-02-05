# InterceptorTask

# Angular Authentication – v21 (Signals + Functional Interceptors)

## 📌 Overview
This project demonstrates a complete **authentication flow in Angular v21** using:

- DummyJSON Authentication APIs
- HttpClient functional interceptors
- Angular Signals for state management
- Official `withInterceptors()` setup

---

## 🔐 APIs Used
- POST https://dummyjson.com/auth/login
- GET  https://dummyjson.com/auth/me
- POST https://dummyjson.com/auth/refresh

---

## 🧠 Key Concepts Demonstrated
- Standalone components
- Functional HTTP interceptor (`HttpInterceptorFn`)
- Dependency Injection using `inject()`
- Token management using Signals
- Automatic token attachment
- Token refresh on 401 errors

---

## 🏗️ Architecture
- **LoginComponent** – Handles login
- **ProfileComponent** – Calls protected `/auth/me`
- **AuthService** – Stores access & refresh tokens (signals)
- **AuthInterceptor** – Attaches token & refreshes on expiry

---


This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
