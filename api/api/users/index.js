import { PrismaClient } from '@prisma/client'
//import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

//Criação de usuário
export const create = async (ctx) => {
    //const password = await bcrypt.hash(ctx.request.body.password, 10)
    const data = {
        username: ctx.request.body.username,
        name: ctx.request.body.name,
        email: ctx.request.body.email,
        password: ctx.request.body.password,
    }

    try {
        const user = await prisma.user.create({ data })
        ctx.body = user
        ctx.status = 201 //código de criado
   } catch(error) {
        ctx.body = error
        ctx.status = 500 //código de erro de servidor
   }
}


export const login = async ctx => {
    const [type, token] = ctx.headers.authorization.split(" ")

    const [email, plainTextPassword] = atob(token).split(":")

    const user = await prisma.user.findUnique({
        where: { email  }

    })

    if (!user) {
        //console.log('sem usuario')
        ctx.status = 404  
        return 
    }

    const passwordMatch = (user.password === plainTextPassword)//await bcrypt.compare(plainTextPassword, user.password)

    if (!passwordMatch) {
        //console.log('senha errada')
        ctx.status = 404
        return
    }

    const {password, ...result} = user  //retira o password do user por questões de segurança
    const accessToken = jwt.sign({
        sub: user.id,
        name: user.name,
        expiresIn: "7d"
    }, process.env.JWT_SECRET) //JWT_SECRET é uma chave que fica guardada no .env

    ctx.body = {
        user: result,
        accessToken
    }
}

export const palpites = async ctx => {
    const username = ctx.request.params.username

    const user = await prisma.user.findUnique({
        where: {username}
    })

    if (!user) {
        ctx.status = 404
        return
    }

    const palpites = await prisma.palpite.findMany({
        where: {
            idUser: user.id
        }
    })

    ctx.body = {
        name: user.name,
        palpites: palpites
    }
}