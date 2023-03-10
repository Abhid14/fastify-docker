const fastify = require('fastify')()

fastify.get('/', async (request, reply) => {
  return { message: 'Hello world from fastify-docker !!' }
})

fastify.listen(3000, '0.0.0.0', (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening on ${address}`)
})
