const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('assets'))
app.set('views', path.join(__dirname, 'template'))
app.set('view engine', '')

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'template/index.html'))
});

app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, 'template/login.html'))
});
console.log(path.join(__dirname, 'template'));
app.listen(3000);