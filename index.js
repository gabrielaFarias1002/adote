const app = require('./config/express');
const database = require('./config/database');

const DBURI = 'mongodb://localhost/adote';
database(DBURI);

const PORT = 3000;
app.listen(PORT, function() {
    console.log(`Sistema iniciado na porta ${PORT}`)
});