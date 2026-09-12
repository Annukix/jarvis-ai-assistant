const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
export const getDailyBriefing = async (): Promise<unknown> => { const res = await fetch(`${baseUrl}/api/v1/briefing/daily`, { headers: { 'x-api-key': 'dev-key' } }); return res.json(); };
