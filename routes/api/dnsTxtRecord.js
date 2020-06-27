var express = require('express');
var router = express.Router();
const dns = require('dns');

router.get('/:url', function (req, res, next) {
	dns.resolveTxt(`${req.params.url}`, (err, records) => {
		var txtRecord = records
			? records.map((a) => {
					return a[0];
			  })
			: 'No Record Found';
		res.json({ txt: txtRecord });
	});
});

router.get('/:url/:txt', function (req, res, next) {
	var txt = req.params.txt;
	dns.resolveTxt(`${req.params.url}`, (err, records) => {
		var txtRecord = records
			? records.map((a) => {
					return a[0];
			  })
			: 'No Record Found';
		res.json({ validate: txtRecord.includes(txt), txt: txtRecord });
	});
});

module.exports = router;
