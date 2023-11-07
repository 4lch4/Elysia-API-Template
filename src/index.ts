import { Elysia } from 'elysia'
import { getConfig } from './lib'
import { swagger } from '@elysiajs/swagger'
import { readPackageJSON } from '@4lch4/backpack/utils'
import { printRoutes } from '@4lch4/backpack/elysia'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { HealthCheckRoutes } from './routes'

const __dirname = dirname(fileURLToPath(import.meta.url))
const packageJson = await readPackageJSON(join(__dirname, '..', 'package.json'))
const config = getConfig()

export const app = new Elysia({ prefix: config.apiPrefix })
  .use(
    swagger({
      documentation: {
        info: {
          title: packageJson.displayName!,
          version: packageJson.version!,
          description: packageJson.description!,
          license: { name: packageJson.license! },
          contact: {
            name: '4lch4',
            email: 'hey@4lch4.email',
            url: 'https://4lch4.com',
          },
        },
        servers: [
          {
            url: 'http://localhost:4242/api/v1',
            description: 'Localhost',
          },
        ],
        tags: [
          {
            name: 'Health',
            description: 'Routes for checking the health of the API.',
          },
        ],
      },
    })
  )
  .use(HealthCheckRoutes('/health'))
  .listen(config.apiPort)

printRoutes(app.routes)

console.log(`Listening on port ${config.apiPort}`)
