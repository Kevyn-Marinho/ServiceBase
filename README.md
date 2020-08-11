## Modelo simples de API  

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c2ab7f4b001f4e40999acd0f3479af2a)](https://app.codacy.com/manual/Kevyn-Marinho/ServiceBase?utm_source=github.com&utm_medium=referral&utm_content=Kevyn-Marinho/ServiceBase&utm_campaign=Badge_Grade_Dashboard)

- Ainda em Desenvolvimento

# Tecnologias utilizadas
* Node (https://nodejs.org/)
* MongoDb (https://www.mongodb.com/)
* Docker (https://www.docker.com/)

# Frameworks Utilizados 
* Express (https://expressjs.com/)
* Mongoose (https://mongoosejs.com/)
* Nodemon (https://nodemon.io/)
* body-parser (https://github.com/expressjs/body-parser)

# Para executar localmente com Docker, siga os passos abaixo
- Necessário instalar o Docker (https://www.docker.com/get-started)
- Necessário instalar o Docker Compose (https://docs.docker.com/compose/install/)
- Clone ou faça download do repositório https://github.com/Kevyn-Marinho/ServiceBase.git
- Abra o terminal e navegue para o diretório do projeto execute o comando
    * docker-compose build && docker-compose up

- Acesse o projeto em http://localhost:3000/
- Para criação do banco é necessário realizar uma inserção de dado 
   *  Para isso faça uma requisição POST para a rota /users

# Para executar localmente sem Docker, siga os passos abaixo

- Necessário instalar o node local (https://nodejs.org/en/)
- Clone ou faça download do repositório https://github.com/Kevyn-Marinho/ServiceBase.git
- Instale o MongoDb
- Crie o banco 'servicebase' dentro do mongo
- Abra o terminal e navegue para o diretório do projeto execute os comandos 
    npm install 
    npm start
- Acesse o projeto em http://localhost:3000/

# Métodos disponíveis   
    [GET]   /users          - Lista todos os usuários cadastrados no banco
        Resposta - HTTP 200 OK
            {
                "users":[
                    {
                        "_id":"5f11102f2e87a22edc09396f",
                        "__v":0,    
                        "username":"Kevyn Marinho",
                        "email":"kevyn@email.com"
                    }
                ]
            }

    [POST]  /users          - Cadastra um novo usuário
        Parametros  
            username:String - Nome de usuário  (obrigatório)
            email:String    - Email do usuário (obrigatório)
        
        Request body
            {
                "username": "Kevyn Marinho",
                "email": "kevyn@email.com"
            }
        
        Resposta - HTTP 201 Created

    [GET]   /users/:id      - Retorna o usuário do id informado
        Resposta 
            {
                "_id":"5f11102f2e87a22edc09396f",
                __v":0
                "username":"teste","
                email":"test@email.com","
            }
