import { Hono } from 'hono';
import { calendarService } from '../services/calendar-service';

export const calendarRoutes = new Hono()
  .get('/today', (c) => c.json(calendarService.today()))
  .post('/import-pdf', async (c) => {
    const body = await c.req.json<{ fileName?: string }>();
    return c.json({ imported: true, fileName: body.fileName ?? 'schedule.pdf' });
  });
