import { Elysia } from 'elysia'

export const HealthCheckRoutes = (prefix: string) =>
  new Elysia({ prefix }).get('/liveness', () => 'OK').get('/readiness', () => 'OK')
