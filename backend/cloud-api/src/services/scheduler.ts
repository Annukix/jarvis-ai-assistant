import cron from 'node-cron';

export const startScheduler = (): void => { cron.schedule('30 6 * * *', () => undefined); };
