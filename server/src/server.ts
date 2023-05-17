import cors from '@fastify/cors'
import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'

// Criando a aplicacao
const app = fastify()

// Utilizando o cors
app.register(cors, {
  // origin: true, // Todas as urls do front podem acessar o back o mais correto em producao é colocar exatamente quais sao as urls permitidas
  origin: [
    'http://localhost:3000', // dev
    'http://umlink.com.br/',
  ],
})
// Registrando um arquivo de rotas separado
app.register(memoriesRoutes)

app.get('/hello', () => {
  // Acessando essa rota com o metodo get, executa essa funcao
  return 'Hello World'
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
