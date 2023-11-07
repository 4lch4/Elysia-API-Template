# Elysia-API-Template

This repository is home to a template for building an API with the Elysia framework.

## Routes

To add new routes, create a new file in the `./src/routes` directory and export a function that accepts an optional prefix parameter and returns an instance of Elysia like the following, from the [Health](./src/routes/Health.ts) route:

```typescript
import { Elysia } from 'elysia'

export const HealthCheckRoutes = (prefix: string) =>
  new Elysia({ prefix })
    .get('/liveness', async () => {
      console.log(`[HealthCheckRoutes:liveness#GET]: Liveness check request received.`)
    })
    .get('/readiness', async () => {
      console.log(`[HealthCheckRoutes:readiness#GET]: Readiness check request received.`)
    })

```


