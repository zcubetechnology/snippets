const express = require("express");
const app = express();

app.get('/', (req, res) => res.send('Hellow'));
app.listen('3000', () => console.log('Server Ready'))
