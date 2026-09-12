# Arhitectură

## Model hibrid
- Local service (MacBook): STT/LLM/TTS
- Cloud API (Fly.io): orchestrare, sync, fallback
- Frontend (React): dashboard + voice UI

## Flux
1. Voice/Siri command
2. STT local (Whisper)
3. Command routing cloud
4. Integrări Notion/Calendar
5. Răspuns + TTS + realtime update
