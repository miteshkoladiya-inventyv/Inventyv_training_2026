# Angular CLI Simulator

A web-based Angular CLI command simulator built with Angular 21. This project provides an interactive terminal interface that mimics the behavior of the Angular CLI, allowing users to execute simulated Angular CLI commands.

## Project Overview

This is a single-page application that emulates the Angular CLI experience in a web browser. It parses user input, matches commands against a predefined command set, and displays realistic output for various Angular CLI operations.

## Features

- **Interactive CLI Terminal**: Type Angular CLI commands in a web-based terminal
- **Command Parsing**: Intelligent argument and option parsing
- **Multiple Commands**: Support for core Angular CLI commands:
  - `ng new` - Create new Angular projects
  - `ng generate` / `ng g` - Generate components, services, modules
  - `ng serve` / `ng s` - Serve applications locally
  - `ng build` - Build for production
  - `ng test` - Run unit tests
  - `ng add` - Add packages
  - `ng version` / `ng v` - Display version info
  - `ng help` - List available commands

- **Command Aliases**: Shorter aliases for common commands (e.g., `ng g` for `ng generate`)
- **Options Support**: Parse and handle command-line options (e.g., `--routing`, `--style=scss`)

## Project Structure

```
src/
├── app/
│   ├── app.ts                  # Root component
│   ├── app.html                # Terminal UI template
│   ├── app.css                 # Styling
│   ├── app.config.ts           # Angular configuration
│   ├── app.routes.ts           # Routing configuration
│   ├── cli-engine.ts           # Main CLI execution engine
│   ├── parser.ts               # Input parsing logic
│   ├── command.ts              # Command definitions and handlers
│   ├── cli-command.model.ts    # TypeScript interfaces
│   └── app.spec.ts             # Unit tests
├── main.ts                     # Application bootstrap
├── index.html                  # HTML entry point
└── styles.css                  # Global styles
```

## Technology Stack

- **Angular**: 21.1.0 - Progressive web framework
- **TypeScript**: 5.9.2 - Typed JavaScript


## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 11.4.0 or higher

### Installation

```bash
npm install
```

### Development Server

Start the local development server:

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any source files.

### Building

Build the project for production:

```bash
npm run build
# or
ng build
```

Build artifacts are stored in the `dist/` directory. The production build is optimized for performance.

### Running Tests

Execute unit tests with Vitest:

```bash
npm test
# or
ng test
```

### Code Scaffolding

Generate new components or other Angular artifacts:

```bash
ng generate component component-name
ng generate service service-name
ng generate module module-name
```

## Usage

1. Launch the application in your browser
2. Type Angular CLI commands in the terminal (e.g., `ng new my-app`)
3. Press Enter to execute the command
4. View the simulated output

### Example Commands

```
ng new my-project --routing --style=scss
ng generate component header
ng generate service api
ng serve --port=4200 --open
ng build --prod
ng version
ng help
```

## Architecture

### Core Components

- **App** - Root component managing terminal state and user input
- **runCli()** - Main engine that executes commands
- **parseInput()** - Parses user input into structured command context
- **COMMANDS** - Array of available commands with handlers
- **Interfaces** - `CliCommand` and `CommandContext`

### Data Flow

```
User Input
    ↓
onKeyDown() in App Component
    ↓
parseInput() - Extract command, args, options
    ↓
runCli() - Find matching command
    ↓
command.process() - Execute command handler
    ↓
Output displayed in terminal
```

## Configuration Files

- **tsconfig.json** - TypeScript compiler configuration
- **angular.json** - Angular CLI configuration
- **package.json** - Dependencies and npm scripts

## Styling

The application uses a dark terminal theme with:
- Black background
- White text
- Monospace font for code
- Cursor animation

See app.css for detailed styling.

## Testing

The project includes unit tests using Vitest. Test files are located alongside their corresponding source files with a `.spec.ts` extension.

Run tests:
```bash
ng test
```

## Dependencies

### Runtime Dependencies
- `@angular/common` - Common Angular utilities
- `@angular/compiler` - Angular template compiler
- `@angular/core` - Angular core functionality
- `@angular/forms` - Form handling
- `@angular/platform-browser` - Browser platform utilities
- `@angular/router` - Client-side routing
- `rxjs` - Reactive extensions

### Dev Dependencies
- `@angular/build` - Build tools
- `@angular/cli` - Command-line interface
- `@angular/compiler-cli` - AOT compilation
- `typescript` - TypeScript compiler
- `vitest` - Testing framework
- `jsdom` - DOM implementation

## Future Enhancements

- Add persistent command history
- Implement syntax highlighting
- Add more advanced command options
- Create command auto-completion
- Add command history navigation (arrow keys)
- Implement real file system simulation

## License

This project is part of Angular training and is for educational purposes.

## Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Guide](https://angular.dev/tools/cli)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vitest Documentation](https://vitest.dev/)

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
