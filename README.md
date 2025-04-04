# API PARA CRIAÇÃO E GERENCIAMENTO DE TICKETS

## Descrição

Esta API foi desenvolvida em **Node.js** sem a utilização de bibliotecas externas, com o objetivo de fornecer a criação e gestão de tickets de suporte.

Ideal para **sistemas de suporte técnico, help desks e gestão de solicitações**, a API permite:

- Criar tickets
- Atualizar tickets
- Listar todos os tickets ou filtrá-los por status
- Alterar o status de um ticket específico
- Remover tickets

## Tecnologias Utilizadas

A API utiliza apenas recursos nativos do **Node.js**:

- [Node.js v20.18.0](https://nodejs.org/en)
- Servidor criado com a biblioteca nativa do Node: [HTTP](https://nodejs.org/api/http.html)
- Armazenamento de dados em arquivo JSON utilizando a biblioteca nativa do Node: [fs](https://nodejs.org/api/fs.html)
- Geração de IDs de tickets utilizando a biblioteca nativa do Node: [crypto](https://nodejs.org/api/crypto.html) (método `randomUUID`)

## Rotas da API

A API disponibiliza as seguintes rotas:

| Descrição                                       | Método     | Rota                            |
| ----------------------------------------------- | ---------- | ------------------------------- |
| Criar um novo ticket                            | **POST**   | `/tickets`                      |
| Listar todos os tickets                         | **GET**    | `/tickets`                      |
| Filtrar tickets por status (`open` ou `closed`) | **GET**    | `/tickets?status={open/closed}` |
| Atualizar um ticket específico                  | **PUT**    | `/tickets/:id`                  |
| Alterar o status de um ticket para "fechado"    | **PATCH**  | `/tickets/:id/close`            |
| Deletar um ticket                               | **DELETE** | `/tickets/:id`                  |

## Como Instalar e Executar

Para utilizar a API, siga os passos abaixo:

1. Faça o download do repositório ou clone utilizando o comando:
   ```sh
   git clone https://github.com/IMoisasZ/tickets-support.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd tickets-support
   ```
3. Execute a API:
   ```sh
   npm run dev
   ```
4. A API estará rodando em `http://localhost:3333`.

### Exemplo de Resposta

Ao criar um ticket, a API retornará um JSON no seguinte formato:

```json
{
	"id": "0faad1f7-6dd6-43b1-8fec-ff4b9f563a29",
	"equipment": "Computador",
	"description": "O computador fica reiniciando",
	"user_name": "Moisas",
	"status": "open",
	"created_at": "2025-04-04T01:30:03.174Z",
	"updated_at": "2025-04-04T01:30:03.174Z"
}
```

## Teste de Rotas

O teste das rotas está pronto na pasta **[Insomnia](https://insomnia.rest/)**. Para importar e testar as rotas, siga os passos abaixo:

1. Instale o [Insomnia](https://insomnia.rest/)
2. Abra o Insomnia e crie uma **nova collection**
3. Clique nos três pontos no canto superior da collection criada
4. Selecione **Importar**
5. Adicione o arquivo que está na pasta "insomnia"
6. Clique em **Scan** para visualizar as requisições

Agora você pode testar cada rota da API diretamente no Insomnia!

## Criador

Esta API foi desenvolvida por **Moisas**. Caso tenha dúvidas ou sugestões, sinta-se à vontade para contribuir ou entrar em contato!
