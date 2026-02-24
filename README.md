# {{AGENT_NAME}}

{{AGENT_DESCRIPTION}}

## Endpoints

- `GET /api/status` — Agent health
- `POST /api/fetch` — Proxy external API calls
- `POST /api/webhook` — Receive webhooks
- `GET|DELETE /api/cache` — Cache management

## Environment Variables

| Variable | Description |
|----------|-------------|
| AGENT_NAME | Name of the agent |
| API_VERSION | API version |
| CACHE_TTL | Cache TTL in seconds (default: 3600) |
| RATE_LIMIT | Requests per minute (default: 100) |
