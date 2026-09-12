import type { MiddlewareHandler } from 'hono';

export const authMiddleware: MiddlewareHandler = async (c, next) => {
  if (!c.req.header('x-api-key')) {
    return c.json({ error: 'Unauthorized' }, 401);
  }
  await next();
};
