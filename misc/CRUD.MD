# CRUD

## Instalar Postgres via Docker

Promet de comando win
```sh
docker pull postgres:latest 
```

executar e nomear container o banco no docker
```sh
docker run --rm --name PSQL -e POSTGRES_PASSWORD=senha -p 5432:5432 -d postgres
docker run --name PSQL -e POSTGRES_PASSWORD=senha -p 5432:5432 -d postgres
```
OBS: "--rm" irá remover o container quando finalizado, recomendado para test
## Iniciando

Para realizar ações no banco de dados com o drizzle primeiro você precisa importar o banco,as funções que deseja usar dele (`eq` por exemplo,verifica se dois itens são iguais) e por último importar as tables exportadas do schema.

```javascript
import { drizzle } from "drizzle-orm/postgres-js";
import { eq } from "drizzle-orm";
import { users, drivers, headFamily, familyMember, trucks, address };
```

Depois conecte-se ao banco usando

```javascript
const db = drizzle(process.env.DATABASE_URL);
```

De agora em diante todas as operações envolvendo o banco dependerão desse objeto

## Comandos

Cria/atualiza o banco de dados baseado no schema

```bash
npm run db:push
```

Prepara uma migração em formato `.sql` no diretório `drizzle/` baseada no schema

```bash
npm run db:gen
```

Migra o banco de dados para um novo estado baseado no arquivo `.sql` mais recente

```bash
npm run db:mig
```

## Operações

### Usuário

```javascript
await db.select().from(users); //retorna tudo de todos os usuários
await db.select().from(users).where(eq(users.id,id)); //usuário especificado pelo id
await db.select().from(users).innerJoin(address,eq(users.address,address.id)); //seleciona usuários e seus endereços
await db.select().from(users).where(eq(users.id,id)).innerJoin(address,eq(users.address,address.id)); //seleciona endereço de usuário específico
await db.insert(users).values(valores); //insere os valores especificados em user
await db.update(users).set(valores).where(eq(users.id,id)); //da update no usuario do id
await db.delete(users).where(eq(user.id,id)); //deleta o usuario do id especificado
```

### Responsável Família

```javascript
await db.select().from(headFamily); 
await db.select().from(headFamily).where(eq(headFamily.id,id)); 
await db.select().from(headFamily).innerJoin(address,eq(headFamily.address,address.id));
await db.select().from(headFamily).where(eq(headFamily.id,id)).innerJoin(address,eq(headFamily.address,address.id));
await db.select().from(headFamily).innerJoin(familyMember,eq(headFamily.id,familyMember.head_id)); //retorna todos responsáveis junto aos dependentes
await db.select().from(headFamily).where(eq(headFamily.id,id)).innerJoin(familyMember,eq(headFamily.id,familyMember.head_id)); //retorna responsável específico junto a seus dependentes
await db.insert(headFamily).values(valores); 
await db.update(headFamily).set(valores).where(eq(headFamily.id,id));
await db.delete(headFamily).where(eq(headFamily.id,id)); 
```

### Membro Família

```javascript
await db.select().from(familyMember); 
await db.select().from(familyMember).where(eq(familyMember.id,id)); 
await db.select().from(familyMember).innerJoin(address,eq(familyMember.address,address.id)); 
await db.select().from(familyMember).innerJoin(headFamily,eq(familyMember.head_id,headFamily.id)); // retorna os dependentes junto aos responsáveis 
await db.insert(familyMember).values(valores); 
await db.update(familyMember).set(valores).where(eq(familyMember.id,id));
await db.delete(familyMember).where(eq(familyMember.id,id)); 
```

### Motorista

```javascript
await db.select().from(drivers); 
await db.select().from(drivers).where(eq(drivers.id,id)); 
await db.select().from(drivers).innerJoin(address,eq(drivers.address,address.id)); 
await db.insert(drivers).values(valores); 
await db.update(drivers).set(valores).where(eq(drivers.id,id));
await db.delete(drivers).where(eq(drivers.id,id)); 
```

### Veículo

```javascript
await db.select().from(trucks); 
await db.select().from(trucks).where(eq(trucks.id,id));  
await db.insert(trucks).values(valores); 
await db.update(trucks).set(valores).where(eq(trucks.id,id));
await db.delete(trucks).where(eq(trucks.id,id)); 
```

### Endereço

```javascript
await db.select().from(address);
await db.select().from(address).where(eq(address.id,id));
await db.insert(address).values(valores);
await db.update(address).set(valores).where(eq(address.id,id));
await db.delete(address).where(eq(address.id,id));
```

