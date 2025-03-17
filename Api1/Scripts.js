const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Se ha recibido una petición en Api1');
    res.send('¡Hola Samuel!');
});

app.listen(5000, () => {
    console.log('API1 corriendo en http://localhost:5000');
});
