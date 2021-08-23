/* 
https://play.tailwindcss.com/0MNQLnXeVv
*/

function Footer(){
  return (
  <div className="w-full bg-indigo-600 text-white">
    <div className="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
      <div className="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start">
        <div className="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
          <div className="mt-8">
            <span className="sr-only">Workflow</span>
            <img
              className="h-8 w-auto m-auto sm:h-10 "
              src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
              alt=""
            />
          </div>
          <p className="hover:opacity-60">Endereço Importante - Cidade Legal.</p>
        </div>
        <div className="w-full sm:w-1/5 flex flex-col space-y-4">
          <a href="/" className="hover:opacity-60">Sobre nós</a>
          <a href="/" className="hover:opacity-60">Responsabilidades</a>
          <a href="/" className="hover:opacity-60">Nossos Serviços</a>
          <a href="/" className="hover:opacity-60">Contato</a>
        </div>
        <div className="w-full sm:w-1/5 flex flex-col space-y-4">
          <a href="/" className="hover:opacity-60">Informações</a>
          <a href="/" className="hover:opacity-60">Feedbacks</a>
          <a href="/" className="hover:opacity-60">Privacidade</a>
          <a href="/" className="hover:opacity-60">Termos de Serviço</a>
        </div>
    </div>
      <div className="opacity-60 pt-8">
        <p>© Se copiar, veja os comentários no código e dê crédito!</p>
      </div>
    </div>
  </div>
  );
} 

export default Footer;