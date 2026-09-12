# Setup Cloud (Fly.io)

```bash
cd backend/cloud-api
fly launch --no-deploy
fly secrets set NOTION_TOKEN=... GROQ_API_KEY=... SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=...
fly deploy
```
