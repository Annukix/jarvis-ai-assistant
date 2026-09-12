import { Hono } from 'hono';

const defaultSettings = { timezone: 'Europe/Paris', briefingHour: '06:30' };

export const userRoutes = new Hono()
  .get('/settings', (c) => c.json(defaultSettings))
  .put('/settings', async (c) => c.json({ ...defaultSettings, ...(await c.req.json()) }));
