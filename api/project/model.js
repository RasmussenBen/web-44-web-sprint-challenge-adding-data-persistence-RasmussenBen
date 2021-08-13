const db = require('../../data/dbConfig')

async function getProject() {
	const specificProject = []
	const results = await db('projects as p')
		.select(
			'p.project_id',
			'p.project_name',
			'p.project_description',
			'p.project_completed'
		)

	results.forEach(result => {
		specificProject.push({
			project_id: result.project_id,
			project_name: result.project_name,
			project_description: result.project_description,
			project_completed: Boolean(result.project_completed)
		})
	})

	return specificProject
}

function addProject(newProject) {
	return db('projects').insert(newProject)
}

module.exports = {
	getProject,
	addProject
}