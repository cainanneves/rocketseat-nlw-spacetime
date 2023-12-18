Passo a passo de configuraçoes do ambiente tomadas para esse projeto

## Inicialização:

Criar um projeto Javascript:
npm init -y

Utilizar o typescript em dev
npm i typescript -D

Para o typescript entender que está num projeto node
npm i @types/node -D

Inicializar o Typescript
npx tsc --init

Automatizar a converção de typescript para javascript.
Baixar: npm tsx -D
Colocar nos scripts do package.json: "dev": "tsx src/server.ts"
Se quiser em modo de watch pra atualizar as alterações: "dev": "tsx watch src/server.ts"

Criar pasta src onde coloca todo o código
cria arquivo server.ts onde ficará o código

---

## Framework utilizado no projeto

Vamos criar uma api restful servir os dados de um banco de dados para o frontend.

Fastify(sera utilizado em producao entao nao usa o -D)
Instalar: npm i fastify

## Padronização de projeto

Instalar npm i eslint -D

Configuracao padrao da rocketseat
npm i @rocketseat/eslint-config -D

{
"extends": ["@rocketseat/eslint-config/node"]
}

comando para corrigir todos os arquivos adicionado no package.json

"lint": "eslint src --ext .ts --fix"

## Banco de dados

Prisma ferramenta pra trabalhar com banco de dados dentro do node intercepta a comunicacao do back ao bd.
Instalar: npm i prisma -D

SQLITE BANCO FILE BASED que vamos usar mas se quiser trocar o banco em producao ele tem suporte a outros bancos de dado sem alterar nada no projeto.

Para inicializar o prisma usando o SQLite(o padrao do prisma é o postgress)
npx prisma init --datasource-provider SQLite

Definir as tabelas no schema.prisma
@id (para a primary key)
@default (usar uma funcao uuid para gerar o id automaticamente)

Para efetivamente criar a tabela no banco de dados (le o arquivo detecta alteracoes desde o ultimo uso precisa nomear):
npx prisma migrate dev

Para visualizar o Banco no browser:
npx prisma studio

Erros com banco populado, reset:
npx prisma migrate reset

Para acessar o Bd de dentro do servidor
Instalar:
npm i @prisma/client
Importar no server.

## Rotas

Separa em uma pasta routes, deixa uma pasta lib com a informacao principal de import do prisma para as rotas importarem desse arquivo.

utilizando zod para validacao
npm i zod

Ja que o front ta separado do back, cors para validar quais urls do front end podem acessar o backend
npm i @fastify/cors

## Outros

Baixei o HTTPIE para testar requisicoes no terminal. Diferente do insomnia mas achei legal.

O prisma nao le as envs do github entao precisa baixar o dotenv em dev pra ler as variaveis ambiente

npm i dotenv -D

Axios para faer requisicoes http a partir do servidor
npm i axios
(Existe uma biblioteca nativa para fetch no node tentei usar mas deu erro, provavelmente estou apssando os parametros da forma errada)

Json Web Token para navegacao autenticada na aplicacao
npm i @fastify/jwt

Upload de arquivos habilita o fastify a entender o envio de outros tipos de dado
npm i @fastify/multipart

Estamos salvando os uploads direto no disco, salvar direto no disco nao é bom existem diversos serviços como amazom s3, google cloud storage, cloudfare r2. Mas tem que criar conta, cadastrar cartao de credito ... essa forma de salvar no disco foi somente para ser mais simples
Para deixar a pasta de uploads publica (por padrão nao fica) instalar
npm i @fastify/static
