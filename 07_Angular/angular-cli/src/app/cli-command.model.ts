// cli-command.model.ts
export interface CliCommand {
  name: string;                      
  alias?: string;                   
  description: string;
  successMessage: string;
  process: (context: CommandContext) => void;
}

export interface CommandContext {
  raw: string;                      
  args: string[];                  
  options: Record<string, string | boolean>; 
}
