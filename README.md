# RestauranteApp - Sistema Web e Mobile para Garçons

## Descrição
O **RestauranteApp** é um sistema desenvolvido para auxiliar restaurantes no gerenciamento de pedidos e atendimento de mesas. Ele possui uma interface web para administração e um aplicativo mobile para os garçons, permitindo um serviço mais ágil e organizado.

## Tecnologias Utilizadas
- **Frontend Web:** React.js
- **Aplicativo Mobile:** React Native
- **Backend:** Node.js com Express
- **Banco de Dados:** Postgres/PRisma
- **Autenticação:** JWT (JSON Web Token)
- **Arquitetura:** MVC, REST, SOA, DAO

## Funcionalidades
- **Web (Administração):**
  - Gerenciamento de mesas
  - Cadastro e edição de produtos do cardápio
  - Cadastro e controle de usuários (garçons e administradores)
  - Monitoramento de pedidos em tempo real

- **Mobile (Garçom):**
  - Consulta de mesas e status dos pedidos
  - Registro e envio de novos pedidos
  - Notificações em tempo real sobre alterações nos pedidos
  - Fechamento de conta e repasse para o caixa

## Instalação
### Backend
1. Clone o repositório:
   ```sh
   git clone https://github.com/seuusuario/RestauranteApp.git
   cd RestauranteApp/backend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=sua_senha
   DB_NAME=restaurante_db
   JWT_SECRET=sua_chave_secreta
   ```
4. Inicie o servidor:
   ```sh
   npm start
   ```

### Frontend Web
1. Acesse a pasta do frontend:
   ```sh
   cd ../frontend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o projeto:
   ```sh
   npm start
   ```

### Aplicativo Mobile
1. Acesse a pasta do mobile:
   ```sh
   cd ../mobile
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Execute o aplicativo:
   ```sh
   npx expo start
   ```

## Contribuição
Sinta-se à vontade para abrir issues e pull requests para melhorias no sistema.

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).

