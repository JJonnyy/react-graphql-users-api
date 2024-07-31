// src/index.ts

import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { schema } from './schema'

const yoga = createYoga({
    schema,  // Use your pre-built schema
})

const server = createServer(yoga)

const port = Number(process.env.API_PORT) || 4000

server.listen(port, () => {
    console.info(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`)
})
