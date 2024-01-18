Criando um datasource com cache</br>

Montando um unit testing</br>

Rodar a aplicação:</br>
docker compose up</br>
</br>
Rodar jsonServer:</br>
<bold>docker exec -it your_container_name bash</bold> </br>
<bold>yarn run server</bold>


localhost:3000 -> jsonServer -> base de dados </br>
localhost:4003 -> graphql -> query de requisições </br>
postgresql://localhost@5432 -> postgres docker-compose coneção com knex </br>

