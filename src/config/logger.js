import bunyan from 'bunyan'

// Setup logger instance
let log = bunyan.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  name: process.env.NAME || 'blog-api'
})

export default log