import { Hono } from 'hono';
import { notionService } from '../services/notion-service';

export const notionRoutes = new Hono()
  .get('/tasks', async (c) => c.json(await notionService.listTasks()))
  .post('/tasks', async (c) => {
    const body = await c.req.json<{ title?: string }>();
    return c.json(await notionService.createTask(body.title ?? 'Untitled'));
  });
