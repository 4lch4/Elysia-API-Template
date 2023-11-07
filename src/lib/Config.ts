export function getConfig() {
  const apiPrefix = process.env.API_PREFIX || '/api/v1'
  const apiPort = process.env.API_PORT || 4242

  return {
    apiPrefix,
    apiPort,
  }
}