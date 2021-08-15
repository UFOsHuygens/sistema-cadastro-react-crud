const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senhadobanco",
    database: "nomedobanco"
})

app.post("/api/insert", (req, res) => {
    db.query("insert into CADASTRADOS (ID, NOME, DATA_NASCIMENTO, CEP, LOGRADOURO, NUMERO_CASA, BAIRRO, CIDADE, EMAIL, PROFISSAO, NUMERO_CELULAR) values (?,?,?,?,?,?,?,?,?,?,?)",
        [
            req.body.id_middle,
            req.body.nome_middle,
            req.body.data_nascimento_middle,
            req.body.cep_middle,
            req.body.logradouro_middle,
            req.body.numero_casa_middle,
            req.body.bairro_middle,
            req.body.cidade_middle,
            req.body.email_middle,
            req.body.profissao_middle,
            req.body.numero_celular_middle
        ]
    )
})

app.listen(3001, () => {
    console.log("Running server on port 3001!");
    //db.query('delete from CADASTRADOS where ID = 1');
})