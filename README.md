# fw-backend

```
npm run all

// calculate
curl -d '{"operation":"2+2*2"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/v1/calc-bot/calculate

//history
curl http://localhost:3000/api/v1/calc-bot/history/10
```