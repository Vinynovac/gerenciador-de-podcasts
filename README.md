# 🎙 Gerenciador de Podcasts - API Node.js com TypeScript

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![NPM Version](https://img.shields.io/npm/v/npm?color=blue)](https://www.npmjs.com/)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](#)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Uma API simples, modular e eficiente para gerenciar podcasts, construída com **Node.js**, **TypeScript** e o módulo nativo **HTTP**. Ideal para aprendizado, protótipos ou como base para projetos maiores.

---

## 🎬 Demonstração

![API Demo](https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif)  
*Exemplo de listagem de episódios via API.*

---

## 🚀 Funcionalidades

- Listar todos os episódios de podcasts.  
- Filtrar episódios por nome do podcast.  
- Estrutura modular: `controllers`, `services`, `repositories`, `models`.  
- Configuração de porta via `.env`.  
- Persistência simples em arquivo JSON (`podcasts.json`).  
- Tipagem forte e segurança com TypeScript.  

---


## ⚙️ Tecnologias

- **Node.js** - Ambiente de execução JavaScript no servidor.  
- **TypeScript** - Tipagem estática, segurança e escalabilidade.  
- **HTTP Module** - Módulo nativo para criar servidores sem frameworks.  
- **JSON** - Persistência simples de dados.  

---

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/Vinynovac/gerenciador-de-podcasts
cd gerenciador-podcasts

Instale as dependências
npm install

Configure a porta no arquivo .env (opcional):
PORT=3636

🏃 Como Executar

Em desenvolvimento:

npx ts-node src/server.ts

Em produção:

npx tsc
node dist/server.js

Acesse em http://localhost:3636 (ou na porta configurada no .env).


---

📝 Boas Práticas Aplicadas

Estrutura modular (controllers, services, repositories, models).

Tipagem forte com TypeScript.

Tratamento básico de query strings.

Configuração de porta via .env.

🔧 Próximas Melhorias

Validação de query e parâmetros.

Tratamento de erros centralizado.

Persistência em banco de dados (PostgreSQL, MongoDB).

Testes unitários e integração com Jest ou Vitest.

Rotas RESTful completas para CRUD de podcasts.

💡 Contribuição

Fork o repositório

Crie uma branch: git checkout -b minha-feature

Faça suas alterações e commit: git commit -m "Minha feature"

Envie para o repositório remoto: git push origin minha-feature

Abra um Pull Request

📄 Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE
 para mais detalhes.