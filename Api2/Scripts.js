const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Se ha recibido una petición en Api2');
    res.send("¡Hola Samuel, otra vez");
});

app.listen(3000, () => {
    console.log('API2 corriendo en http://localhost:3000');
});
