const uri = "mongodb+srv://rcalvs:123123123@cluster-neden.mouff.mongodb.net/apiCadastro?retryWrites=true&w=majority";
var mongoose = require('mongoose');
mongoose.connect(uri);

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
