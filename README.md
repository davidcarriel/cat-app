# Discord Cat App! 😺

Este APP enviará diariamente às 08:00 e às 20:00 um embed com uma foto aleatória de gato em um chat do seu servidor do **Discord** que está vinculado a uma webhook. Para torná-lo operante, siga os passos abaixo:

### Dependências

Após baixar a aplicação e instalar o [NodeJS](https://nodejs.org/pt) em seu computador, abra um terminal localizado no diretório da aplicação e execute o seguinte comando para baixar e instalar as dependências necessárias: ```npm install axios dotenv node-schedule```

### URL da Webhook

Obtenha a **URL** da sua webhook criada no seu servidor do discord, caso não saiba sugiro ver este [guia](https://support.discord.com/hc/pt-br/articles/228383668-Usando-Webhooks).

### .env

No diretório principal do APP, crie um arquivo nomeado ` .env` com a **URL** da sua webhook e insira os seguintes dados no arquivo: ```DISCORD_WEBHOOK_KEY='sua_url_webhook'``` 

### Inicialização
Abra um terminal localizado no diretório do aplicativo e execute o seguinte comando para inicializar a aplicação: ```npm start``` ou ```node index.js```

### Hospedagem (opcional)
Utilizando a plataforma gratuita de hospedagem [Discloud](https://discloud.com/), crie no diretório principal um arquivo chamado `discloud.config` e insira os dados abaixo e, caso queira ajuste da forma que preferir. Para dúvidas: [Documentação da Discloud](https://docs.discloud.com/)
```
NAME=catbot
AVATAR=sua-url
TYPE=app
MAIN=index.js
RAM=100
AUTORESTART=false
VERSION=latest
APT=tools
```
