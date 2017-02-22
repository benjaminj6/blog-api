import body from 'koa-bodyparser'
import koaLogger from 'koa-bunyan-logger'
import passport from 'koa-passport'
import session from 'koa-session-minimal'

import auth from './auth'
import log, { requestLogger } from './logger'

export default app => {
  app.use(koaLogger(log))
  app.use(requestLogger)

  app.use(body())

  app.keys = [ 'secret' ]
  app.use(session())

  auth(passport)
  app.use(passport.initialize())
  app.use(passport.session())
}