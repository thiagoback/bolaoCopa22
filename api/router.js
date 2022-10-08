import Router from '@koa/router'
import * as users from './app/users/index.js'
import * as palpites from './app/palpites/index.js'
import * as games from './app/games/index.js'

export const router = new Router()

router.post('/users', users.create)
router.post('/palpites', palpites.create)
router.get('/games', games.list)
router.get('/login', users.login)
router.get('/:username', users.palpites)