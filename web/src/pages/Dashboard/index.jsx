import { Card, Icon, DateSelect } from '../../components'
import { useAsync, useAsyncFn, useLocalStorage } from 'react-use'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { format, formatISO } from 'date-fns'
import { useEffect, useState } from 'react'


export const Dashboard = () => {
    const [currentDate, setDate] = useState(formatISO(new Date(2022, 10, 20))) 
    const [auth, setAuth] = useLocalStorage('auth', {})

    const [palpites, fetchPalpites] = useAsyncFn(async () => {
        const res = await axios({
            method: 'get',
            baseURL: import.meta.env.VITE_API_URL ,
            url: `/${auth.user.username}`,
        })
        const palpites = res.data.palpites.reduce((acc, palpite) => {
            acc[palpite.idGame] = palpite
            return acc
        }, {}) 

        return palpites
    })
    
    
    const [games, fetchGames] = useAsyncFn (async(params) => {
        const res = await axios({
            method: 'get',
            baseURL: import.meta.env.VITE_API_URL,
            url: "/games",
            params
        })
        return res.data
    })

    const isLoading = games.loading || palpites.loading 
    const hasError = games.error || palpites.error
    const isDone = !isLoading && !hasError

    useEffect(() => {
        fetchGames({gameDate: currentDate})
    }, [currentDate])
    
    useEffect(() => {
        fetchPalpites()
    }, [])

    const logout = () => setAuth({})

    if (!auth?.user?.id) {    // as ? servem para não dar erro caso exista um usuário sem id
        return <Navigate to="/" replace={true} />
    }
    
    return (
      <>
        <header className="bg-red2 text-white">
            <div className="container max-w-3xl p-4 flex justify-between items-center">
                <div className=""></div>
                <img src="/assets-natrave/logo/logo-fundo-vermelho.svg" className="w-24 md:w-32" />
                <div className='flex'>
                    <a href={`/${auth?.user?.username}`}>
                        <Icon name="profile" className="h-10"/>
                    </a> 
                    <div onClick={logout} className="p-2 cursor-pointer font-bold text-lg">
                            Sair
                    </div>
                </div>
            </div>
        </header>

        <main className='space-y-6'>
            <section id="header" className="space-y-6 bg-red2 text-white">
                <div className="container max-w-3xl p-4 space-y-2">
                    <spam>Olá, {auth?.user?.name}!</spam>
                    <h3 className='text-xl font-bold'>Qual o seu palpite?</h3>
                </div>
            </section>

            <section id="content" className="container max-w-3xl space-y-4 p-4">

                <DateSelect currentDate={currentDate} onChange={setDate}/>
                
                <div className="space-y-4">
                    {isLoading && 'Carregando jogos...'} 
                    {hasError && 'Ops! Algo deu errado.'}

                    {isDone && games.value?.map(game =>
                        <Card   
                            key={game.id}
                            idGame={game.id}
                            teamA={game.teamA}
                            teamB={game.teamB}
                            grupo={game.gameStage}
                            gameDate={format(new Date(game.gameDate), 'H:mm') }
                            scoreTeamA={palpites?.value?.[game.id]?.scoreTeamA || ''}
                            scoreTeamB={palpites?.value?.[game.id]?.scoreTeamB || ''}
                        />
                    )}

                </div>
            </section>
        </main>
    </>
    )
}