const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
	let msg = 'Hey young world!';
	console.log(msg);
	res.send(msg);
});

app.listen(PORT, () => {
	console.log('Now listening on port: ', PORT);
});

