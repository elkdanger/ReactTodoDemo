var express = require('express');
var router = express.Router();
var React = require('react/addons');
var Todo = React.createFactory(require('../components/Todo.jsx').Todo);

/* GET home page. */
router.get('/', function(req, res, next) {
	var html = React.renderToString(Todo());
  	res.render('index', { title: 'Express', component: html });
});

module.exports = router;
