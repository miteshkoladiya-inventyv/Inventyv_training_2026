
import { CliCommand } from './cli-command.model';

export const COMMANDS: CliCommand[] = [

  {
    name: 'new',
    alias: 'n',
    description: 'Creates a new Angular workspace',
    successMessage: 'Angular project created successfully!',
    process: (ctx) => {
      const projectName = ctx.args[0];

      if (!projectName) {
        console.error('Error: Project name is required');
        return;
      }

      const routing = ctx.options['routing'] === true;
      const style = ctx.options['style'] || 'css';

      console.log(`Creating project: ${projectName}`);
      console.log(`src/, app/, assets/ folders created`);

      if (routing) {
        console.log(`app-routing.module.ts created`);
      }

      console.log(`Using style format: ${style}`);
      console.log(`angular.json generated`);
    }
  },

  {
    name: 'generate',
    alias: 'g',
    description: 'Generates files like component, service, module',
    successMessage: 'File generated successfully!',
    process: (ctx) => {
      const type = ctx.args[0];   
      const name = ctx.args[1];

      if (!type || !name) {
        console.error('Error: Usage: ng g component name');
        return;
      }

      if (type === 'component' || type === 'c') {
        console.log(`Creating component: ${name}`);
        console.log(`${name}.component.ts`);
        console.log(`${name}.component.html`);
        console.log(`${name}.component.scss`);
      }

      if (type === 'service' || type === 's') {
        console.log(`${name}.service.ts created`);
      }

      if (type === 'module' || type === 'm') {
        console.log(`${name}.module.ts created`);
      }
    }
  },


  {
    name: 'serve',
    alias: 's',
    description: 'Builds and serves your app locally',
    successMessage: 'Application is running!',
    process: (ctx) => {
      const port = ctx.options['port'] || '4200';
      const open = ctx.options['open'] === true;

      if (open) {
        console.log(`Opening browser automatically...`);
      }
    }
  },

  {
    name: 'build',
    description: 'Builds the application for production',
    successMessage: 'Build completed successfully!',
    process: (ctx) => {
      const prod = ctx.options['configuration'] === 'production' || ctx.options['prod'] === true;

      console.log(`Building project...`);

      if (prod) {
        console.log(`Using production configuration`);
        console.log(`Minifying, bundling, optimizing...`);
      } else {
        console.log(`Using development configuration`);
      }

      console.log(`dist/ folder generated`);
    }
  },

  {
    name: 'test',
    description: 'Runs unit tests',
    successMessage: 'All tests executed!',
    process: () => {
      console.log(`Launching Karma test runner...`);
      console.log(`Running unit tests...`);
      console.log(`✔ 25 tests passed`);
    }
  },


  {
    name: 'add',
    description: 'Adds support for an external library',
    successMessage: 'Package added successfully!',
    process: (ctx) => {
      const packageName = ctx.args[0];

      if (!packageName) {
        console.error('Error: Package name is required');
        return;
      }

      console.log(`Installing package: ${packageName}`);
      console.log(`Updating angular.json and package.json`);
      console.log(`Running schematic for ${packageName}`);
    }
  },

  
  {
    name: 'version',
    alias: 'v',
    description: 'Shows Angular CLI version info',
    successMessage: 'Version info displayed',
    process: () => {
      console.log(`Angular CLI: 21.0.0`);
      console.log(`Node: 20.x`);
      console.log(`OS: Windows 10`);
      console.log(`Angular: 21.0.0`);
    }
  },


  {
    name: 'help',
    description: 'Lists all available commands',
    successMessage: 'Help displayed',
    process: () => {
      console.log(`Available commands:`);
      console.log(`ng new <name> [--routing] [--style=scss]`);
      console.log(`ng generate|g component|service|module <name>`);
      console.log(`ng serve [--port=4200] [--open]`);
      console.log(`ng build [--prod]`);
      console.log(`ng test`);
      console.log(`ng add <package>`);
      console.log(`ng version`);
    }
  }

];
