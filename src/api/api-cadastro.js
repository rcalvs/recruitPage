//node src/api/api-cadastro.js
var http = require('http'); 
const express = require('express');
const app = express();
// const bodyParser = require('body-parser');


app.use(require("cors")());
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

var server = http.createServer(app); 
server.listen(3031);
console.log("Servidor escutando na porta 3031...")

const uri = "mongodb+srv://rcalvs:123123123@cluster-neden.mouff.mongodb.net/apiCadastro?retryWrites=true&w=majority";
var mongoose = require('mongoose');
mongoose.connect(uri);
 
const cadastros = [];

app.get('/', (req, res, next) => {
    res.json({message: "Essa é sua base de dados atual", dados: cadastros});
})

app.post('/cadastro', (req, res) => { 
    console.log("Cadastro recebido!");
    // console.log(req.body.EndereçoCompleto);
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
 
app.get('/api', function (_req, res) {
  var db = require('./db');
  var newPerson = db.Mongoose.model('apiCadastro', db.cadastroSchema, 'apiCadastro');
  newPerson.find({}).lean().exec(function(_e, cadastros){
     res.json(cadastros);
     res.end();
  });
});

app.post('/data/', function (req, res) {
    var db = require('./db');
    var newPerson = db.Mongoose.model('apiCadastro', db.cadastroSchema, 'apiCadastro');
    var newCadastro = new newPerson(
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
