import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

// Criando a aplicacao
const app = fastify()

// Conectando com o banco
const prisma = new PrismaClient()

// Criando rotas
app.get('/hello', () => {
  // Acessando essa rota com o metodo get, executa essa funcao
  return 'Hello World'
})

app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

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
