//api-cadastro.js
var http = require('http'); 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
 
app.use(require("cors")());
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
 
app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!", dados: cadastros});
})
 
const cadastros = [];
app.post('/cadastro', (req, res, next) => { 
    console.log("Cadastro recebido!");
    console.log(req.body.EndereçoCompleto);

    //salva no banco de dados
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
    res.json({message: "Tudo ok por aqui!", dados: cadastros});
}) 
 
var server = http.createServer(app); 
server.listen(3031);
console.log("Servidor escutando na porta 3031...")



// const [endereçoCompleto, setEndereçoCompleto] = useState({
//   CEP: '',
//   Logradouro: '',
//   Numero: '',
//   Bairro: '',
//   Cidade: '',
//   Estado: '',
// });

//   const [fullRegister, setFullRegister] = useState({
//   NomeCompleto: '',
//   Email: '',
//   Sexo: '',
//   Nascimento: '',
//   CPF: '',
//   Identidade: '',
//   EstadoCivil: '',
//   CargoPretendido: '',
//   EndereçoCompleto: "",
//   Telefone: '',
//   TelefoneCelular: '',
// });