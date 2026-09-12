export const notionService = {
  async listTasks(): Promise<{ tasks: Array<{ id: string; title: string }> }> {
    return { tasks: [] };
  },
  async createTask(title: string): Promise<{ id: string; title: string }> {
    return { id: crypto.randomUUID(), title };
  }
};
