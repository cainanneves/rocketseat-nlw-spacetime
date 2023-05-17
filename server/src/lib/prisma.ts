import { PrismaClient } from '@prisma/client'

// Conectando com o banco
export const prisma = new PrismaClient({
  log: ['query'],
})
