import { PrismaClient } from '@prisma/client'
import { addDays, formatISO } from 'date-fns'

const prisma = new PrismaClient()

export const list = async ctx => {
    const currentDate = ctx.request.query.gameDate

    //caso o currentDate seja vazio
    const where = currentDate ? {
        gameDate: {
            gte: currentDate,
            lt: formatISO(addDays(new Date(currentDate), 1))
        }
    } : {}


    try {
        const games = await prisma.game.findMany({ where })
        ctx.body = games
        ctx.status = 201 //código de criado
   } catch(error) {
        console.log(error)
        ctx.body = error
        ctx.status = 500 //código de erro de servidor
   }
}