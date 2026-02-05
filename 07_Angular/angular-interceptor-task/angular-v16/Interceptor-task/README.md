# InterceptorTask

# 📘 README.md — **Angular v16 (NgModule + HTTP_INTERCEPTORS)**


## 📌 Overview
This project demonstrates authentication using **Angular v16** with the traditional **NgModule-based architecture**.

---

## 🔐 APIs Used
- POST https://dummyjson.com/auth/login
- GET  https://dummyjson.com/auth/me
- POST https://dummyjson.com/auth/refresh

---

## 🧠 Key Concepts Demonstrated
- NgModules (`app.module.ts`)
- HttpClient interceptor via `HTTP_INTERCEPTORS`
- Dependency Injection
- Service-based token management
- Classic Angular change detection

---

## 🏗️ Architecture
- **LoginComponent** – Login UI
- **ProfileComponent** – Calls protected API
- **AuthService** – Stores tokens
- **AuthInterceptor** – Attaches Authorization header
- **AppModule** – Registers interceptor

---


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
