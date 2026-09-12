import { Hono } from 'hono';

export const commandsRoutes = new Hono().post('/', async (c) => {
  const body = await c.req.json<{ command?: string; source?: string }>();
  return c.json({ received: body.command ?? '', source: body.source ?? 'unknown' });
});
