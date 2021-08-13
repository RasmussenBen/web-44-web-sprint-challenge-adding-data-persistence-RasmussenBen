const db = require('../../data/dbConfig')

function getResources() {
	return db('resources')
}

async function addResource(newResource) {
	return db('resources').insert(newResource)
		.then(() => {
			return db('resources')
			.select('resources.resource_name')
			.first()
		}
	)
}

module.exports = {
	getResources,
	addResource
} 