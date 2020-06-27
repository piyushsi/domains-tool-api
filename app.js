var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var metaTagsRouter = require('./routes/api/metaTags');
var dnsTxtRecordRouter = require('./routes/api/dnsTxtRecord');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/meta', metaTagsRouter);
app.use('/api/dnstxt', dnsTxtRecordRouter);

module.exports = app;
