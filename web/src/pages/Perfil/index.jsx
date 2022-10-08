import { Card, Icon, DateSelect } from '../../components'
import { useAsyncFn, useLocalStorage } from 'react-use'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { format, formatISO } from 'date-fns'
import { useEffect, useState } from 'react'


export const Perfil = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [currentDate, setDate] = useState(formatISO(new Date(2022, 10, 20))) 
    const [auth, setAuth] = useLocalStorage('auth', {})

    const [{value: user, loading, error}, fetchPalpites] = useAsyncFn(async () => {
        const res = await axios({
            method: 'get',
            baseURL: import.meta.env.VITE_API_URL,
            url: `/${params.username}`,
        })
        const palpites = res.data.palpites.reduce((acc, palpite) => {
            acc[palpite.idGame] = palpite
            return acc
        }, {}) 

        return {
            ...res.data,
            palpites
        }
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

    const isLoading = games.loading || loading 
    const hasError = games.error || error
    const isDone = !isLoading && !hasError

    useEffect(() => {
        fetchGames({gameDate: currentDate})
    }, [currentDate])
    
    useEffect(() => {
        fetchPalpites()
    }, [])

    const logout = () => {
        setAuth({})
        navigate('/')
}

    return (
        <>
            <header className="bg-red2 text-white">
                <div className="container max-w-3xl p-4 flex justify-between items-center">
                    <a href="/dashboard">
                        <Icon name="back" className="w-8" />
                    </a>

                    <img src="/assets-natrave/logo/logo-fundo-vermelho.svg" className="w-24 md:w-32" />
                    {auth?.user?.id && (
                        <div onClick={logout} className="p-2 cursor-pointer font-bold text-lg">
                            Sair
                        </div>
                    )}
                    {!auth?.user?.id && (
                        <div/>
                    )}
                </div>
            </header>

            <main className='space-y-6'>
                <section id="header" className=" space-y-6 bg-red2 text-white">
                    <div className="container max-w-3xl p-4 space-y-6">
                        {auth?.user?.id && (
                            <h3 className='text-xl md:text-2xl font-bold'>{user?.name}</h3> 
                        )}
                        {!auth?.user?.id && (
                            <h3 className='text-xl md:text-2xl font-bold'>Palpites de {user?.name}</h3> 
                        )}
                    </div>
                </section>

                <section id="content" className="container max-w-3xl space-y-4 p-4">

                    {auth?.user?.id && (
                        <h2 className="text-red2 text-xl md:text-2xl font-bold">Seus palpites!</h2>)}

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
                            scoreTeamA={user?.palpites?.[game.id]?.scoreTeamA || ''}
                            scoreTeamB={user?.palpites?.[game.id]?.scoreTeamB || ''}
                            disabled={true}
                            />
                        )}
                    </div>
                </section>

            </main>
        </>
    )
}