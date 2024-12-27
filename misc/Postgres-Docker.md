# Documentação Docker Postgres

## Criação de network

Para que o container de banco de dados converse com o PgAdmin

> docker network create --driver `tipo` `nome`
```sh
docker network create --driver bridge database
```

## Instalação do Postgres(database)

Será criado o banco de dados postgres no docker (exemplo em [Crud](./CRUD.MD)) no network que criamos:

_OBS: Será executado sem o `--rm`, para não excluir o banco posteriormente._
> docker run --name `container_name` --network=`network_name` -e POSTGRES_PASSWORD=`database_password` -p `port_local`:`port_container` -d `database_name`
```sh
docker run --name PSQL --network=database -e POSTGRES_PASSWORD=senha -p 5432:5432 -d postgres
```

## Informação do network

para buscar informação do network e container instalados nele

> docker inspect `network_name`
```sh
docker inspect database
```

## Instalação do PgAdmin(visual postgress)

Instalando o PgAdmin no msm network do batabase para ter o visual do msm

> docker run --name `container_name` --network=`network_name` -p `port_local`:`port_container` -e PGADMIN_DEFAULT_EMAIL=`acess_email` -e PGADMIN_DEFAULT_PASSWORD=`acess_password` -d `pgadmin_name`

```sh
docker run --name PSQL-PgAdmin --network=database -p 15432:80 -e PGADMIN_DEFAULT_EMAIL=email@email.com -e PGADMIN_DEFAULT_PASSWORD=123456 -d dpage/pgadmin4
```

## Configurar o DB no PG Admin

Para aparecer o banco no PgAdmin

Clique com direito no servers > Registrar:

* Gerneral
    * Name: Nome da conexão. Escolha própria.
* Connection 
    * Host name/address: Nome do container (cosnegue através do `docker ps`) 
    * Maintenance database: Nome do banco de dados
    * Username: Usuário informado na criação do banco de dados. 
    * Password: Senha informada na cosntrução do database

Verificar as imagens do Docker
```sh
docker ps
```

## Referêncais

https://www.youtube.com/watch?v=CdoBvd_bPdk
