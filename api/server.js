const express = require('express')
const helmet = require('helmet')
const projectsRouter = require('./project/router')
const resourcesRouter = require('./resource/router')
const tasksRouter = require('./task/router')
const server = express()

server.use(express.json())
server.use(helmet())
server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', tasksRouter)

server.use('*', (req, res, next) => {
  next({status: 404,
    message: 'Page not found'
  })
})

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message
  })
})

module.exports = server