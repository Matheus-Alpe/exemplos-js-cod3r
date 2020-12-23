const multer = require('multer');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static(__dirname));

// * Configuração BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ! Exemplo para XMLHttpRequest #2
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload');
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage }).single('arquivo');

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) return res.end('Ocorreu um erro.');

        res.end('Concluído com sucesso.');
    });
});

// ! Exemplo para Fetch API #2
app.post('/formulario', (req, res) => {
    res.send({
        //só vem informação se tiver o bodyParser configurado
        ...req.body,
        id: 2
    })
});

// ! Exemplo para Axios #2
app.get('/parOuImpar', (req, res) => {
    //formas de receber dados pelo express
    // 1- req.body
    // 2- req.query
    // 3- req.params
    const par = parseInt(req.query.numero) % 2 === 0;

    res.send({
        resultado: par ? 'par' : 'impar'
    });
})

app.listen(3000, () => console.log('listening on port 3000'));