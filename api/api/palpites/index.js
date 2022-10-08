import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()


export const create = async (ctx) => {
    //console.log(ctx.headers)
    const [type, token] = ctx.headers.authorization.split(" ")
    //console.log({type, token})

    try {
        const verToken = jwt.verify(token, process.env.JWT_SECRET)
        
        if (!ctx.request.body.scoreTeamA && !ctx.request.body.scoreTeamB)
        {
            ctx.status = 400;
            return
        }

        const { idGame } = ctx.request.body
        const scoreTeamA = parseInt(ctx.request.body.scoreTeamA)
        const scoreTeamB = parseInt(ctx.request.body.scoreTeamB)
        const idUser = verToken.sub;
        const data = { idGame, idUser, scoreTeamA, scoreTeamB }
        
        try {
            const [palpite] = await prisma.palpite.findMany({
                where: { idUser, idGame }
            })
            
            /*ctx.body = palpite
                ? await prisma.hunch.update({
                    where: {
                        id: palpite.id,
                    },
                    data: {
                        scoreTeamA,
                        scoreTeamB
                    }
                })
                : await prisma.palpite.create({
                    data: {
                        idUser,
                        idGame,
                        scoreTeamA,
                        scoreTeamB
                    }
                })*/
            if (palpite) {
                await prisma.palpite.update({
                    where: { id: palpite.id },
                    data: { scoreTeamA, scoreTeamB }
                })
            }
            else {
                await prisma.palpite.create({
                    data: {
                        idUser,
                        idGame,
                        scoreTeamA,
                        scoreTeamB
                    }
                })
            }

            ctx.body = palpite

        } catch(error) {
        console.log(error)
            ctx.body = error
            ctx.status = 500 //código de erro de servidor
        }
    } catch (error) {
        console.log(error)
        ctx.status = 401
        return  
    }

}
