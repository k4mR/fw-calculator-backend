# fw-backend

```
// to run service
npm run all

// to run service with mongodb
docker-compose up --build

// calculate
curl -d '{"operation":"2+2*2"}' -H "Content-Type: application/json" -X POST http://localhost:3001/api/v1/calc-bot/calculate

//history
curl http://localhost:3001/api/v1/calc-bot/history/10
```