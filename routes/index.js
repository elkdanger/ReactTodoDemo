var express = require('express');
var router = express.Router();
var React = require('react/addons');
var TodoApp = React.createFactory(require('../components/TodoApp.jsx').TodoApp);

/* GET home page. */
router.get('/', function(req, res, next) {
	var html = React.renderToString(TodoApp());
  	res.render('index', { title: 'Express', component: html });
});

module.exports = router;
