# UserProfileCard

## Project information

# Angular Assignment - User Profile Card

## Question

- You are building a User Profile Card using Angular + @angular/material.

## Requirements

- Create an Angular component called UserCardComponent that demonstrates ALL of the following:

  1. Data Binding
	  - Interpolation -> Display user name and age
	  - One-way binding (Property Binding) -> Bind avatar image URL
	  - Two-way binding -> Edit user name using [(ngModel)]
	  - Event Binding -> Button click to toggle user status
	  - Class Binding -> Change card border color based on active/inactive status

  2. Component Communication
	  - Use @Input() to receive user data from parent
	  - Use @Output() to emit an event when user status changes

  3. Lifecycle Hooks
	  - Use at least:
		 - ngOnInit
		 - ngOnChanges
		 - ngAfterViewInit

  4. View Queries
	  - Use:
		 - @ViewChild() -> Access a single input field
		 - @ViewChildren() -> Access multiple Material buttons

  5. Angular Material
	  - Use:
		 - MatCard
		 - MatInput
		 - MatButton

  6. File Structure Discipline
	  - Logic -> .ts
	  - Styling -> .css
	  - Template -> .html

## Expected Output

- A Material Card showing user details
- Editable user name
- Status toggle button
- Visual change when status updates
- Console logs proving lifecycle hooks & view queries work
- Disable the toggle button if the username is empty.


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
