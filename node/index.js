const express = require('express')
const faker = require('faker')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const name = faker.name.findName()
const sql = `INSERT INTO people(name) values('${name}')`
connection.query(sql)
//connection.end()

var title = '<h1>Full Cycle Rocks!</h1>';
var list = '<ul style="list-style-type: none;">';

app.get('/', (req, res) => {
    connection.query('SELECT name FROM people', (error, results, fields) => {
        if (error) {
            console.error('Erro ao executar a consulta:', error);
            res.send('Erro ao executar a consulta.');
            return;
        }

        var list = '<ul style="list-style-type: none;">';
        results.forEach((row) => {
            list += '<li>&mdash; ' + row.name + '</li>';
        });
        list += '</ul>';

        var content = title + list;
        res.send(content);
    });
});

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})