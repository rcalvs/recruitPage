var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/apiCadastro');

var cadastroSchema = new mongoose.Schema({
    NomeCompleto: String,
    Email: String,
    Sexo: String,
    Nascimento: Number,
    CPF: Number,
    Identidade: Number,
    EstadoCivil: String,
    CargoPretendido: String,
    EndereçoCompleto: {
      CEP: Number,
      Logradouro: String,
      Numero: Number,
      Bairro: String,
      Cidade: String,
      Estado: String
    },
    Telefone: Number,
    TelefoneCelular: Number,
    id: String,
}, { collection: 'apiCadastro' }
);

module.exports = { Mongoose: mongoose, cadastroSchema: cadastroSchema }
