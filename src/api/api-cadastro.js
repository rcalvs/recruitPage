//api-cadastro.js
var http = require('http'); 
const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
var router = express.Router();

app.use(require("cors")());
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/apiCadastro');

 
app.get('/', (req, res, next) => {
    res.json({message: "Essa é sua base de dados atual", dados: cadastros});
})
 
const cadastros = [];
app.post('/cadastro', (req, res, next) => { 
    console.log("Cadastro recebido!");
    console.log(req.body.EndereçoCompleto);

    cadastros.push({
      NomeCompleto: req.body.NomeCompleto, 
      Email: req.body.Email,
      Sexo: req.body.Sexo,
      Nascimento: req.body.Nascimento,
      CPF: req.body.CPF,
      Identidade: req.body.Identidade,
      EstadoCivil: req.body.EstadoCivil,
      CargoPretendido: req.body.CargoPretendido,
      EndereçoCompleto: {
        CEP: req.body.EndereçoCompleto.CEP,
        Logradouro: req.body.EndereçoCompleto.Logradouro,
        Numero: req.body.EndereçoCompleto.Numero,
        Bairro: req.body.EndereçoCompleto.Bairro,
        Cidade: req.body.EndereçoCompleto.Cidade,
        Estado: req.body.EndereçoCompleto.Estado,
      },
      Telefone: req.body.Telefone,
      TelefoneCelular: req.body.TelefoneCelular,
    });
    res.json({message: "Cadastro salvo com sucesso!", dados: cadastros});
}) 
 
var server = http.createServer(app); 
server.listen(3031);
console.log("Servidor escutando na porta 3031...")

app.get('/api', function (req, res, next) {
  var db = require('../db');
  var Cadastros = db.Mongoose.model('apiCadastro', db.cadastroSchema, 'apiCadastro');
  Cadastros.find({}).lean().exec(function(e,docs){
     res.json(docs);
     res.end();
  });
});

router.post('/data/', function (req, res, next) {
    var db = require('../db');
    var Cadastro = db.Mongoose.model('apiCadastro', db.cadastroSchema, 'apiCadastro');
    var newCadastro = new Cadastro(
      {
        NomeCompleto: req.body.NomeCompleto, 
        Email: req.body.Email,
        Sexo: req.body.Sexo,
        Nascimento: req.body.Nascimento,
        CPF: req.body.CPF,
        Identidade: req.body.Identidade,
        EstadoCivil: req.body.EstadoCivil,
        CargoPretendido: req.body.CargoPretendido,
        EndereçoCompleto: {
          CEP: req.body.EndereçoCompleto.CEP,
          Logradouro: req.body.EndereçoCompleto.Logradouro,
          Numero: req.body.EndereçoCompleto.Numero,
          Bairro: req.body.EndereçoCompleto.Bairro,
          Cidade: req.body.EndereçoCompleto.Cidade,
          Estado: req.body.EndereçoCompleto.Estado,
        },
        Telefone: req.body.Telefone,
        TelefoneCelular: req.body.TelefoneCelular,
      }
    );
    newCadastro.save(function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json(newCadastro);
        res.end();
    });
});

module.exports = router;