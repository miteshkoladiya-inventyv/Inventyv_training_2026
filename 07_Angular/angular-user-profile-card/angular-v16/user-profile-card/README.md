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
