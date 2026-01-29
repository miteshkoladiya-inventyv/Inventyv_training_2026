// parser.ts
import { CommandContext } from './cli-command.model';

export function parseInput(input: string): CommandContext {
  const parts = input.trim().split(' ');

  // remove "ng"
  if (parts[0] === 'ng') {
    parts.shift();
  }

  const args: string[] = [];
  const options: Record<string, string | boolean> = {};

  for (let part of parts.slice(1)) {
    if (part.startsWith('--')) {
      const [key, value] = part.replace('--', '').split('=');
      options[key] = value ?? true;   // --routing => true
    } else {
      args.push(part);
    }
  }

  return {
    raw: input,
    args,
    options
  };
}
