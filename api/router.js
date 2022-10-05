import Router from '@koa/router'

export const router = new Router()

const users = []

router.get('/users',async ctx => {
    ctx.body = users
})

router.post('/users',async ctx => {
    const user = {
        nome: ctx.request.body.nome,
        username : ctx.request.body.username,
        email: ctx.request.body.email,
        senha: ctx.request.body.senha
    }
    users.push(user)
    ctx.body = user
})
