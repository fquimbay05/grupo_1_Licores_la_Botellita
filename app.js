const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public')) // la carpeta raiz del proyecto 
app.listen(4000, () => {console.log('Server running')});



app.get('/', (req, res) => {
    let htmlPath = path.resolve('./views/index.html');
    res.sendFile(htmlPath);
})

