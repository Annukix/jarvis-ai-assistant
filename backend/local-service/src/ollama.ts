export async function generateLocalResponse(command: string): Promise<string> {
  return command.trim() ? `Jarvis local: ${command}` : 'Spune-mi comanda ta.';
}
