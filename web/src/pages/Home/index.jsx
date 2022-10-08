import { useLocalStorage } from 'react-use'
import { Navigate } from 'react-router-dom'


export function Home() {
  const [auth] = useLocalStorage('auth', {})

  if (auth?.user?.id) {    // as ? servem para não dar erro caso exista um usuário sem id
    return <Navigate to="/dashboard" replace={true} />
  }

  return (
    <div className="min-h-screen p-6 bg-red1 text-white flex flex-col items-center space-y-6">
    
    <header className="container flex justify-center max-w-5xl">
      <img src="./../../../assets-natrave/logo/logo-fundo-vinho.svg" className="w-40" />
    </header>

    <div className="container max-w-5xl min-h-screen p-4 flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">
      
      <div className="md:flex-1 flex justify-center">
        <img src="/assets-natrave/imagem/img.png" className="w-full max-w-md"/>
      </div>

      <div className="flex flex-col space-y-6 md:flex-1">
        <h1 className="text-2xl md:text-3xl text-center font-bold">
          Dê o seu palpite na Copa do Mundo do Catar 2022!
        </h1>

        <a href="/cadastro" className="text-center  bg-white text-red1 text-xl px-8 py-4 rounded-xl">
          Criar minha conta
        </a> 

        <a href="/login" className="text-center text-white border border-white text-xl px-8 py-4 rounded-xl">
          Fazer login
        </a>  
      </div>      
    </div>
    </div>
  ) 
}

