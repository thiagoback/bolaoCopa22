import { Icon } from '../../components'

export const Perfil = () => {
    return (
        <div className="">
            <header className="bg-red2 text-white">
                <div className="container max-w-3xl p-4 flex justify-between">
                    <img src="/assets-natrave/logo/logo-fundo-vermelho.svg" className="w-24 md:w-32" />
                    <Icon name="profile" className="h-10" />
                </div>
            </header>

            <main>
                <div className="space-y-6 bg-red2 text-white">
                    <div className="container max-w-3xl p-4 flex">
                        <Icon name="back" className="h-10" />
                        <h3 className='text-xl font-bold'>Usuário</h3>
                    </div>
                </div>
            </main>
        </div>
    )
}