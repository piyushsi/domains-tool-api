var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

router.get('/:url', function (req, res, next) {
	fetch(`https://${req.params.url}`)
		.then((res) => {
			return res.text();
		})
		.then((text) => {
			var title = text.includes('title')
				? { title: text.split('<title>')[1].split('</title>')[0] }
				: { title: 'N/A' };

			if (text.includes('<meta')) {
				var Data = text
					.split('<meta')
					.filter((value, index) => {
						if (index != 0) {
							return value;
						}
					})
					.map((value) => {
						var val = value.split('>')[0];
						if (val.includes('name=')) {
							var name = val.split('name=')[1].split(`"`)[1];
							var content = val.split('content=')[1].split(`"`)[1];
							var obj = {};
							obj[`${name}`] = content;
							return obj;
						} else if (val.includes('property=')) {
							var property = val.split('property=')[1].split(`"`)[1];
							var content = val.split('content=')[1].split(`"`)[1];
							var obj = {};
							obj[`${property}`] = content;
							return obj;
						} else if (val.includes('content=') && !val.includes('name=') && !val.includes('property=')) {
							var content = val.split('content=')[1].split(`"`)[1];
							var unknown = value.split('=')[0].split(' ')[1];
							var obj = {};
							obj[`${unknown}`] = content;
							return obj;
						} else {
							var unknown = value.split('=')[0].split(' ')[1];
							var value = value.split('=')[1].split(`"`)[1];
							var obj = {};
							obj[`${unknown}`] = value;
							return obj;
						}
					});
				Data.push(title);
				var metaData = Object.assign({}, ...Data);
				res.json(metaData);
			} else {
				res.send('meta not found');
			}
		})
		.catch((err) => {
			res.send('Try Again');
		});
});

router.get('/:url/:name', function (req, res, next) {
	var name = req.params.name;
	fetch(`https://${req.params.url}`)
		.then((res) => {
			return res.text();
		})
		.then((text) => {
			var title = text.includes('title')
				? { title: text.split('<title>')[1].split('</title>')[0] }
				: { title: 'N/A' };

			if (text.includes('<meta')) {
				var Data = text
					.split('<meta')
					.filter((value, index) => {
						if (index != 0) {
							return value;
						}
					})
					.map((value) => {
						var val = value.split('>')[0];
						if (val.includes('name=')) {
							var name = val.split('name=')[1].split(`"`)[1];
							var content = val.split('content=')[1].split(`"`)[1];
							var obj = {};
							obj[`${name}`] = content;
							return obj;
						} else if (val.includes('property=')) {
							var property = val.split('property=')[1].split(`"`)[1];
							var content = val.split('content=')[1].split(`"`)[1];
							var obj = {};
							obj[`${property}`] = content;
							return obj;
						} else if (val.includes('content=') && !val.includes('name=') && !val.includes('property=')) {
							var content = val.split('content=')[1].split(`"`)[1];
							var unknown = value.split('=')[0].split(' ')[1];
							var obj = {};
							obj[`${unknown}`] = content;
							return obj;
						} else {
							var unknown = value.split('=')[0].split(' ')[1];
							var value = value.split('=')[1].split(`"`)[1];
							var obj = {};
							obj[`${unknown}`] = value;
							return obj;
						}
					});
				Data.push(title);
				var filterData = Data.filter((val) => {
					if (val[name]) {
						return true;
					}
				});
				var validate;
				filterData[0] ? (validate = true) : (validate = false);
				var obj = { validate };
				validate ? (obj[name] = filterData[0][name]) : {};
				res.json(obj);
			} else {
				res.send('meta not found');
			}
		})
		.catch((err) => {
			res.send('Error:' + err);
		});
});

module.exports = router;
