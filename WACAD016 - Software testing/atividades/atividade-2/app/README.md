# Loja Virtual - Web Academy

Sistema de loja virtual com Backend (REST Api) desenvolvida em Express e Frontend em React. O repositório tem um diretório para o backend e outro para o frontend, e os dois sistemas são inicializados automaticamente com o docker compose (instruções abaixo). Além dos containers do backend e frontend, o docker compose também cria containers para o banco de dados de desenvolvimento, banco de dados de teste, além do phpmyadmin. Para rodar a aplicação, execute os seguintes comandos:

```
$ git clone https://github.com/dbfernandes/LojaVirtualWA
$ cd LojaVirtualWA
$ cp .env.example .env
$ cp frontend/.env.example frontend/.env
$ cp backend/.env.example backend/.env
$ cd frontend && npm install && cd ..
$ cd backend && npm install && cd ..
$ docker compose up
$ docker exec -it loja_backend npx prisma migrate dev
$ docker exec -it loja_backend npx prisma db seed
```

## Esquema do Banco
<img src="https://webdev2.icomp.ufam.edu.br/wa/esquema.png" alt="Esquema do banco de dados">

## PhpMyAdmin

```
URL: http://localhost:8010
Server: db (serviço do docker compose)
Username: root
Senha: 123456
Banco de Dados: lojavirtual
```

## Swagger
```
URL: http://localhost:3333/api
```

## Insomnia

O arquivo `backend/.insomnia/Insomnia.json` pode ser importado no Insomnia (API Client) para testar os endpoints do Backend. Para importar os endpoints no Insomnia, acesse a opção Preferences do menu Application, clique na aba Data, e escolha a opção Import Data.

## Frontend
```
URL: http://localhost:3366
```
