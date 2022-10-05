import { Card, Icon, DateSelect } from '../../components'

export const Dashboard = () => (
    <>
        <header className="bg-red2 text-white">
            <div className="container max-w-3xl p-4 flex justify-between">
                <img src="/assets-natrave/logo/logo-fundo-vermelho.svg" className="w-24 md:w-32" />
                <a href="/perfil">
                    <Icon name="profile" className="h-10"/>
                </a>
            </div>
        </header>

        <main className='space-y-6'>
            <section id="header" className="space-y-6 bg-red2 text-white">
                <div className="container max-w-3xl p-4 space-y-2">
                    <span>Olá Usuário!</span>
                    <h3 className='text-xl font-bold'>Qual o seu palpite?</h3>
                </div>
            </section>

            <section id="content" className="container max-w-3xl space-y-4 p-4">

                <DateSelect />
                
                <div className="space-y-4">
                    <Card   timeA={{slug:'sui'}}
                            timeB={{slug:'cam'}}
                            grupo={{slug: 'Grupo B'}}
                            jogo={{horario:'7h00'}} />

                    <Card   timeA={{slug:'bra'}}
                            timeB={{slug:'ale'}}
                            grupo={{slug: 'Grupo G'}}
                            jogo={{horario:'10h00'}} />
                </div>
            </section>
        </main>
    </>
)