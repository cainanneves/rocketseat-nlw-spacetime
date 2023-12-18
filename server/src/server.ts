import 'dotenv/config'

import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import fastify from 'fastify'
import { resolve } from 'node:path'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'
import { uploadRoutes } from './routes/upload'

// Criando a aplicacao
const app = fastify()

// Registrando o multipart
app.register(multipart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

// Utilizando o cors
app.register(cors, {
  origin: true, // Todas as urls do front podem acessar o back o mais correto em producao é colocar exatamente quais sao as urls permitidas
  // origin: [
  //   'http://localhost:3000', // dev
  //   'http://umlink.com.br/',
  // ],
})

// Registrando o JWT para usar
app.register(jwt, {
  secret: 'spacetime', // muito importante para criptografia do token deixei spacetime pq ta em dev
})

// Registrando um arquivo de rotas separado
app.register(memoriesRoutes)
app.register(authRoutes)
app.register(uploadRoutes)

// app.get('/hello', () => {
//   // Acessando essa rota com o metodo get, executa essa funcao
//   return 'Hello World'
// })

// Iniciando a aplicacao
app
  .listen({
    // fazendo meu servidor ouvir requisicoes de um endereco especifico
    port: 3333, // acessando localhost nessa porta vou acessar o servidor pelo menos em dev
  })
  .then(() => {
    // listen devolve uma promise entao quando retornar executa essa funcao
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
