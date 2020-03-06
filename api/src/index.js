const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

// settings
//lo sube a un servidor online ej nube y si no lo encuentra lo sube al localhost:6060
app.set('port', process.env.PORT || 6060);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
//lee archivos de texto no imagenes por q son muy pesadas
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//routes
app.use(require('./routes/index'));

app.get('/', (req, res) => {
    res.json('hello world');
});

//starting the server
app.listen(6060, () => {
    console.log(`Server on port ${app.get('port')}`);
});