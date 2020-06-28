var express = require('express');
var router = express.Router();
const metagetall = require('metagetall');

router.get('/:url', function (req, res, next) {
	metagetall
		.fetch(`https://${req.params.url}`)
		.then((response) => {
			res.json(response);
		})
		.catch((err) => {
			res.send('Try Again');
		});
});

router.get('/:url/:name', function (req, res, next) {
	var name = req.params.name;
	metagetall
		.fetch(`https://${req.params.url}`)
		.then((response) => {
			const validateRes = response[name] ? { validate: true } : { validate: false };
			validateRes.validate ? (validateRes[name] = response[name]) : (response[name] = 'not found');
			res.json(validateRes);
		})
		.catch((err) => {
			console.log(err);
			res.send('Try Again');
		});
});

module.exports = router;
