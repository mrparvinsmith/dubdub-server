var Todo = require('../models/todo');

var todo = {};

todo.index = function(req, res){
  Todo.find({}, function(err, results){
    if(err) res.json(err);
    res.json(results);
  });
};

module.exports = todo;
