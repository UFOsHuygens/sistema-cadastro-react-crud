#### CRUD com ReactJS

1 - Inicia a aplicação React
```
npm install
npm start
```

2 - Inicia servidor
```
cd server
npm install
node index.js
```

3 - Especificações da tabela

```sql
create table CADASTRADOS (
	  ID int(255),
    NOME varchar(90),
    
    DATA_NASCIMENTO varchar(10),
    CEP varchar(10),
    
    LOGRADOURO varchar(100),
    NUMERO_CASA int(255),
    
    BAIRRO varchar(50),
    CIDADE varchar(50),
    
    EMAIL varchar(50),
    PROFISSAO varchar(50),
    
    NUMERO_CELULAR varchar(20)
)
