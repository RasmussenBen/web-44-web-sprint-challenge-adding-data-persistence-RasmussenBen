const express = require('express')
const Projects = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
	Projects.getProject()
		.then(projects => {
			res.json(projects)
		})
		.catch(next)
})

router.post('/', (req, res, next) => {
	const newProject = req.body

	Projects.addProject(newProject)
		.then(newProject => {
			res.status(201).json(newProject)
		})
		.catch(next)
})

module.exports = router