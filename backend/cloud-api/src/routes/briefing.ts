import { Hono } from 'hono';

export const briefingRoutes = new Hono().get('/daily', (c) => c.json({ greeting: 'Bună dimineața!', summary: 'Briefing demo.' }));
