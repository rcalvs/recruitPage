/*
  https://tailwindcomponents.com/component/form-with-file-input
  https://tailwindcomponents.com/component/steps-bar
*/
export default function Form() {
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
            required="true" />
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
         
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">E-mail</label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              placeholder="E-mail" />
          </div>

          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Cargo Pretendido</label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              placeholder="Cargo Pretendido" />
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">

          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Sexo</label>
            <select className="py-2 px-3 text-gray-500 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Não Binário</option>
              <option>Não Informar</option>
            </select>
          </div>

          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Estado Civil</label>
            <select className="py-2 px-3 text-gray-500 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
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
              placeholder="Data de Nascimento" />
          </div>
        </div>

       
    
    
        <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
          <button
            className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'
          >
            Continue
          </button>
        </div>
    
      </div>
    </div>
  )
}
