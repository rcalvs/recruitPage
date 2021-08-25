/*
  https://tailwindcomponents.com/component/form-with-file-input
  https://tailwindcomponents.com/component/steps-bar
*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Form() {

  useEffect(() => {
    axios.get('http://localhost:3030/estados').then(response => {
        console.log(response.data);
    })
  }, []);

  const [endereçoCompleto, setEndereçoCompleto] = useState({
    CEP: '',
    Logradouro: '',
    Numero: '',
    Bairro: '',
    Cidade: '',
    Estado: '',
  });

    const [fullRegister, setFullRegister] = useState({
    NomeCompleto: '',
    Email: '',
    Sexo: '',
    Nascimento: '',
    CPF: '',
    Identidade: '',
    EstadoCivil: '',
    CargoPretendido: '',
    EndereçoCompleto: "",
    Telefone: '',
    TelefoneCelular: '',
  });

  async function buscaCep(e) {
    let CEPValue = e.target.value;
    CEPValue = CEPValue.replace(/\D+/, '');
    setEndereçoCompleto(prevState => ({
      ...prevState,
      CEP: CEPValue
    }));
    try {
      const resp = await axios.get(`https://viacep.com.br/ws/${endereçoCompleto.CEP}/json/`);
      const dados = resp.data;
      setEndereçoCompleto(prevState => ({
        ...prevState,
        Logradouro: dados.logradouro,
        Bairro: dados.bairro,
        Cidade: dados.localidade,
        Estado: dados.uf,
      }));
    } catch (err) {
      alert('Ocorreu um erro ao consultar o CEP. Por favor tente novamente.');
    }
  }


  function log() {
    setFullRegister(prevState => ({
      ...prevState,
      EndereçoCompleto:{ ...endereçoCompleto}
    }));
    console.log(fullRegister)
    console.log(endereçoCompleto)
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setFullRegister(prevState => ({
        ...prevState,
        [name]: value
    }));
  }
  const changeEndereço = e => {
    const { name, value } = e.target;
    setEndereçoCompleto(prevState => ({
        ...prevState,
        [name]: value
    }));
  }

  function handleFormSubmit(event){
    event.preventDefault();
    setFullRegister(prevState => ({
      ...prevState,
      EndereçoCompleto:{ ...endereçoCompleto}
    }));
    console.log(fullRegister)
    console.log(endereçoCompleto)

    axios.post('http://localhost:3031/cadastro', fullRegister).then(response => {
        alert(response.data.dados.length + ' cadastros!');
        console.log(response.data.dados);
    })
}

  return (
    <div className="flex h-screen bg-indigo-600 items-center justify-center mt-32 mb-32">
      <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
        <div className="flex justify-center py-4">
          {/* <div class="flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
          </div> */}
        </div>
    
        <div className="flex justify-center">
          <div className="flex">
            <h1 className="text-gray-900 font-bold md:text-2xl text-xl">Dados Pessoais</h1>
          </div>
        </div>
    
        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Nome Completo</label>
          <input 
            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text"
            placeholder="Nome Completo"
            required
            value={fullRegister.NomeCompleto}
            name="NomeCompleto"
            onChange={handleChange}
            />
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
         
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">E-mail</label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              placeholder="E-mail"
              required
              value={fullRegister.Email}
              name="Email"
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Cargo Pretendido</label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              placeholder="Cargo Pretendido"
              value={fullRegister.CargoPretendido}
              name="CargoPretendido"
              onChange={handleChange}
            />
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">

          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Sexo</label>
            <select
              className="py-2 px-3 text-gray-500 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
              value={fullRegister.Sexo}
              name="Sexo"
              onChange={handleChange}
            >
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Não Binário</option>
              <option>Não Informar</option>
            </select>
          </div>

          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Estado Civil</label>
            <select
              className="py-2 px-3 text-gray-500 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
              value={fullRegister.EstadoCivil}
              name="EstadoCivil"
              onChange={handleChange}
            >
              <option>Solteiro</option>
              <option>Casado</option>
              <option>Separado</option>
              <option>Divorciado</option>
              <option>Viúvo</option>
            </select>
          </div>

          <div class="grid grid-cols-1">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Data de Nascimento</label>
            <input
              class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              placeholder="Data de Nascimento"
              value={fullRegister.Nascimento}
              name="Nascimento"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex">
            <h1 className="text-gray-900 font-bold md:text-2xl text-xl">Seu Endereço</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Endereço</label>
          <input 
            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text"
            placeholder="Endereço"
            required
            value={endereçoCompleto.Logradouro}
            name="Logradouro"
            onChange={changeEndereço}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Bairro</label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              placeholder="Bairro"
              required
              value={endereçoCompleto.Bairro}
              name="Bairro"
              onChange={changeEndereço}
            />
          </div>

          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Cidade</label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              placeholder="Cidade"
              required
              value={endereçoCompleto.Cidade}
              name="Cidade"
              onChange={changeEndereço}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">CEP</label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              placeholder="CEP"
              required
              maxLength="8"
              value={endereçoCompleto.CEP}
              name="CEP"
              onChange={changeEndereço}
              onBlur={(e) => buscaCep(e)} 
            />
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Telefone</label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              placeholder="Telefone"
              maxLength="11"
              value={fullRegister.Telefone}
              name="Telefone"
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Celular</label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              placeholder="Celular"
              value={fullRegister.TelefoneCelular}
              name="TelefoneCelular"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex">
            <h1 className="text-gray-900 font-bold md:text-2xl text-xl">Outras Informações</h1>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">CPF</label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              placeholder="CPF"
              value={fullRegister.CPF}
              name="CPF"
              required
              maxLength="11"
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Identidade</label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              placeholder="Identidade"
              value={fullRegister.Identidade}
              name="Identidade"
              onChange={handleChange}
            />
          </div>
        </div>
    
        <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
          <button
            className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'
            onClick={ handleFormSubmit }
          >
            Continue
          </button>
        </div>
    
      </div>
    </div>
  )
}
