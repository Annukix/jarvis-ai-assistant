# Setup Local

Prerequisites: Node 20+, Python 3.11+, pnpm, Docker.

```bash
cp backend/local-service/.env.example backend/local-service/.env
cp backend/cloud-api/.env.example backend/cloud-api/.env
cp frontend/.env.example frontend/.env

docker compose up --build
```
