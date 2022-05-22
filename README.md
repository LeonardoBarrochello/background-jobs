# background-jobs

Esta é uma aplicação desenvolvida durante a aula sobre Background jobs (filas) da Rocketseat no youtube.

# Requisitos

- Nodejs instalado
- Conta no MailTrap criado , para visualizar o job executando a função de envio de email fake . site => https://mailtrap.io
- Docker instalado para rodar o banco de dados redis.
- Rode o comando abaixo para criar o container do banco de dados redis
  docker run -d -p 6379:6379 -i -t redis:alpine

# Como rodar
- Clone o projeto
- na raiz do projeto rode "npm i" ou "yarn"
- rode yarn dev para rodar a aplicação e a fila de jobs

# Como testar 
- Utilizando postman , insomnia ou qualquer outra paltaforma de API , faça uma requisição POST na rota http://localhost:3333/users passando como body JSON (name,email,password).
- Verifique no console do seu Mailtrap recebeu o email (é importante verificar se no body foi passado o mesmo email que foi criado a conta no Mailtrap).
- Na rota http://localhost:3333/admin/queues é possível acessar um painel onde se pode visualizar as informações de execução dos jobs.

# Aprendizado

- Criação de fila de jobs para execução de processos em segundo plano , utilizando a biblioteca bull.
- Automatizar criação e inclusão de jobs na fila. 
- Utilização do Mailtrap para criar um servidor de email fake e testar os envios.
