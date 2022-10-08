import Router from '@koa/router'
import * as users from './users/index.js'
import * as palpites from './palpites/index.js'
import * as games from './games/index.js'

export const router = new Router()

router.post('/users', users.create)
router.post('/palpites', palpites.create)
router.get('/games', games.list)
router.get('/login', users.login)
router.get('/:username', users.palpites)