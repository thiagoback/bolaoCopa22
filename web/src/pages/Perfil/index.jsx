import { Card, Icon, DateSelect } from '../../components'

export const Perfil = () => (
    <>
        <header className="bg-red2 text-white">
            <div className="container max-w-3xl p-4 flex justify-between">
                <img src="/assets-natrave/logo/logo-fundo-vermelho.svg" className="w-24 md:w-32" />
                <Icon name="profile" className="h-10" />
            </div>
        </header>

        <main className='space-y-6'>
            <section id="header" className=" space-y-6 bg-red2 text-white">
                <div className="container max-w-3xl p-4 space-y-6">
                    <a href="/dashboard">
                        <Icon name="back" className="w-8" />
                    </a>
                    <h3 className='text-xl md:text-2xl font-bold'>Usuário</h3>
                </div>
            </section>

            <section id="content" className="container max-w-3xl space-y-4 p-4">

                <h2 className="text-red2 text-xl md:text-2xl font-bold">Seus palpites!</h2>

                <DateSelect />

                <div className="space-y-4">
                    <Card   timeA={{slug:'sui'}}
                            timeB={{slug:'cam'}}
                            grupo={{slug: 'Grupo B'}}
                            jogo={{horario:'7h00'}} />

                    <Card   timeA={{slug:'bra'}}
                            timeB={{slug:'ale'}}
                            grupo={{slug: 'Grupo E'}}
                            jogo={{horario:'10h00'}} />
                </div>
            </section>

        </main>
    </>
)