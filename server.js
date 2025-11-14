```js
const express = require('express');
const path = require('path');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let fila = [];


// Adicionar pessoa à fila
app.post('/add', (req, res) => {
fila.push(req.body);
res.send('OK');
});


// Listar fila
app.get('/list', (req, res) => {
res.json(fila);
});


// Servir arquivos estáticos
app.use(express.static(path.join(__dirname)));


// Porta da Vercel
app.listen(3000, () => console.log('Karaoke rodando!'));
```
