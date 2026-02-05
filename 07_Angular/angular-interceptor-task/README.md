
---

# 📘 MASTER README.md (Outside All Version Folders)

```md
# Angular Authentication – Multi-Version Implementation

## 📌 Overview
This repository contains **three implementations of the same authentication system**, built using different Angular versions.

The goal is to demonstrate how **authentication, token handling, and HTTP interceptors evolve across Angular versions**.

---

## 📁 Version Breakdown

### 🅰️ Angular v16
- NgModule-based architecture
- `HTTP_INTERCEPTORS`
- Classic service-based token storage

### 🅱️ Angular v18
- Standalone components
- Interceptor via `provideHttpClient`
- Service-based state

### 🅲 Angular v21
- Standalone components
- Functional interceptors
- Signals for token state
- Official `withInterceptors()` API

---

## 🔐 Common APIs Used
- `/auth/login` – Login
- `/auth/me` – Protected user profile
- `/auth/refresh` – Refresh access token


