import { Elysia } from 'elysia'

export const HealthCheckRoutes = (prefix: string) =>
  new Elysia({ prefix })
    .get(
      '/liveness',
      async () => {
        console.log(`[HealthCheckRoutes:liveness#GET]: Liveness check request received.`)

        return 'OK'
      },
      {
        detail: {
          description: 'Check if the API is alive.',
          tags: ['Health'],
          summary: 'Liveness check.',
          responses: { 200: { description: 'The API is alive.' } },
        },
      }
    )
    .get(
      '/readiness',
      async () => {
        console.log(`[HealthCheckRoutes:readiness#GET]: Readiness check request received.`)

        return 'OK'
      },
      {
        detail: {
          description: 'Check if the API is ready to accept requests.',
          tags: ['Health'],
          summary: 'Readiness check.',
          responses: { 200: { description: 'The API is ready to accept requests.' } },
        },
      }
    )
