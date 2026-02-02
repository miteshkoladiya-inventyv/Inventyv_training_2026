# Angular Product Cart – Multi-Version

## 📌 Overview
This repository contains **three implementations of the same Product List + Cart application**, built using **different Angular versions** to demonstrate architectural and state-management evolution in Angular.

Each folder represents the **same functionality**, implemented according to **best practices of that Angular version**.

---

## 📁 Folder Details

### 🅰️ `angular-v16`
**Angular Version:** 16  
**Architecture:** NgModule-based (Classic Angular)

#### Key Characteristics
- Uses `app.module.ts`
- Components declared in NgModule
- Service-based shared state
- No standalone components
- No signals

#### Concepts Demonstrated
- Traditional Angular module architecture
- Component-to-service interaction
- Imperative state updates
- Change detection-driven UI updates

📘 See `angular-v16/product-cart/README.md` for details.

---

### 🅱️ `angular-v18`
**Angular Version:** 18  
**Architecture:** Standalone Components

#### Key Characteristics
- No `app.module.ts`
- Components are standalone
- Service-based state management
- No signals

#### Concepts Demonstrated
- Standalone component architecture
- Feature-based folder structure
- Classic service-driven state
- Simplified dependency management

📘 See `angular-v18/product-cart/README.md` for details.

---

### 🅲 `angular-v21`
**Angular Version:** 21  
**Architecture:** Standalone + Signals (Modern Angular)

#### Key Characteristics
- Standalone components
- State managed using Angular Signals
- `computed()` for derived state
- Immutable update patterns

#### Concepts Demonstrated
- Modern Angular state management
- Fine-grained reactivity with signals
- Service as a single source of truth
- No `@Input/@Output` for shared state

📘 See `angular-v21/product-cart/README.md` for details.

---

## 🧪 Application Features (Common to All Versions)

Each implementation includes:

- Product list (5–6 products)
- Add product to cart
- Increase / decrease quantity
- Remove product completely
- Cart total calculation
- Clear cart button


## 🧠 Learning Summary

| Angular Version | Key Learning |
|---------------|-------------|
| Angular 16 | Module-based architecture & classic services |
| Angular 18 | Standalone components & simplified structure |
| Angular 21 | Signals-based reactive state management |
