import { Icon } from './../../components'

const Input = ({name, label, ...props}) => (
    <div className="flex flex-col">
        <label htmlFor={name} className="text-sm font-bold text-red1 mb-2">{label}</label>
        <input name={name} id={name} {...props} className="p-3 border border-grey1 rounded-xl focus:outline focus:outline-1 focus:outline-red1"/>
    </div>
)

export const Login = () => {
    return (
        <div>
             <header className="p-4 border-b border-red3">
                <div className="container max-w-xl flex justify-center">
                    <img src="/assets-natrave/logo/logo-fundo-branco.svg" className="w-32 md:w-40" />
                </div>
             </header>

             <main className="p-4 container max-w-md">
                <div className="p-4 flex space-x-4 items-center">
                    <a href="/">
                        <Icon name="back" className="h-6" />
                    </a>
                    <h2 className="text-xl font-bold">
                        Entre na sua conta
                    </h2>
                </div>

                <form className="space-y-6 p-4">
                    <input
                        type="text"
                        name="email"
                        label="E-mail"
                        placeholder="Digite seu e-mail"
                    />

                    <Input
                        type="password"
                        name="password"
                        label="Senha"
                        placeholder="Digite sua senha"
                    />
                    <div></div>
                    <button className="text-center w-full  bg-red2 text-white px-8 py-3 rounded-xl">
                        Entrar
                    </button> 

                </form>
             </main>
        </div>
    )
}