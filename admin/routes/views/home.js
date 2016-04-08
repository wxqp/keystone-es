var keystone = require('../../../');

exports = module.exports = function(req, res) {

	keystone.render(req, res, 'home', {
		section: 'home',
		page: 'home',
		title: keystone.get('name') || 'Quirino Ordaz Coppel',
		orphanedLists: keystone.getOrphanedLists()
	});

};
