const express = require('express');
const server = express();
const { exec } = require('child_process');

server.get('/', (req, res) => {
	res.sendFile('index.html', { root: __dirname });
});

server.get('/move', (req, res) => {
	const x = req.query.x*3;
	const y = req.query.y*3;
	exec(`xdotool mousemove_relative -- ${x} ${y}`);
	res.sendStatus(200);
});

server.get('/click', (req, res) => {
	const btn = req.query.button;
	exec(`xdotool click ${btn}`);
	res.sendStatus(200);
});

server.listen(8080);
