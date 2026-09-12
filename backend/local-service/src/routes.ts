import type { Express, Request, Response } from 'express';
import { generateLocalResponse } from './ollama';

export function registerRoutes(app: Express): void {
  app.get('/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok', service: 'local-service' });
  });

  app.post('/voice/process', async (req: Request, res: Response) => {
    const command = String(req.body?.command ?? '');
    const response = await generateLocalResponse(command);
    res.json({ command, response });
  });
}
