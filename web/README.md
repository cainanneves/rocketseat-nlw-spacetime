Front-end utilizando React e usando o Nextjs

npx create-next-app@latest web --use-npm

limpa o public, deleta o readme da raiz e o favicon.ico da pasta app

.tsx significa que vai incluir html dentro do javascript

Criar a pasta components para colocar os componentes

Configuracao padrao da rocketseat
npm i @rocketseat/eslint-config -D
{
"extends": [
"next/core-web-vitals",
"@rocketseat/eslint-config/react"
]
}

Prettier tailwind
npm i prettier-plugin-tailwindcss -D

O prettier vem no eslint da rocketseat
cria na raiz do projeto
Prettier.config.js
com
module.exports = {
plugins: [require('prettier-plugin-tailwindcss')],
}

organiza a ordem das classes de css do tailwind
