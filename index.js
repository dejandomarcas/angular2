var Hapi = require('hapi'),
	Path = require('path'),
	server = new Hapi.Server();

server.connection({ 
    host: process.env.IP, 
    port: process.env.PORT 
});

// Static Routes
server.route({
	method: 'GET',
	path: '/todolist/{param*}',
	handler: {
		directory: {
			path: 'frontend'
		}
	},
	config: {
		cache: {
			expiresIn: 30 * 1000,
			privacy: 'private'
		}
	}
});

server.route({
	method: 'GET',
	path: '/node_modules/{param*}',
	handler: {
		directory: {
			path: 'node_modules'
		}
	}
});

server.route({
	method: 'GET',
	path: '/bower_components/{param*}',
	handler: {
		directory: {
			path: 'bower_components'
		}
	}
});

// Start the server
server.start(function() {
	console.log('server initiated http://localhost:8008');
});