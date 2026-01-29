
import { COMMANDS } from './command';
import { parseInput } from './parser';

export function runCli(input: string): string {
  const parts = input.trim().split(' ');

  if (parts[0] !== 'ng') {
    return 'Error: Command must start with ng\n';
  }

  const commandName = parts[1];

  const command = COMMANDS.find(cmd =>
    cmd.name === commandName || cmd.alias === commandName
  );

  if (!command) {
    return `Error: Unknown command: ${commandName}\n`;
  }

  const context = parseInput(input);
  
  let output = `${command.name} - ${command.description}\n`;
  command.process(context);
  output += `${command.successMessage}\n`;
  
  return output;
}
