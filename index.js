const express = require('express');

const app = express();

const View = require('./View');

app.get('/', (req, res) => 
{
  	res.send
	(
		new View()
		.Tag('h1')
		.Attributes
		({
			'whatever':'true'
		})
		.Style
		({
			color:'blue'
		})
		.Children
		([
			'Hola'
			,
			new View()
			.Children
			(
				'Mundo'
			)
		])
		.toString()
	)
});
app.listen(3000, () => 
{
  	console.log('server started');
});
