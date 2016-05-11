var Todo = require('../models/todo');

var todo = {};

todo.index = function(req, res){
  Todo.find({}, function(err, results){
    if(err) res.json(err);
    res.json(results);
  });
};

todo.create = function(req, res){
  var task = new Todo();
  task.title = req.body.title;
  task.priority = req.body.priority;
  task.difficulty = req.body.difficulty;
  task.createdAt = new Date();
  task.updatedAt = task.createdAt;
  task.save(function(err){
    if(err) res.json(err);
    res.json(task);
  });
};

todo.update = function(req, res){
  Todo.findById(req.params.id, function(err, task){
    task.title = req.body.title;
    task.priority = req.body.priority;
    task.difficulty = req.body.difficulty;
    task.updatedAt = new Date();
    if(req.body.completed){
      task.completedOn = new Date();
    }
    task.save(function(err){
      if(err) res.json(err);
      res.json(task);
    });
  })
}

todo.destroy = function(req, res){
  Todo.findById(req.params.id, function(err, task){
    if(err) res.json(err);
    task.remove(function(err){
      if(err) res.json(err);
      res.json({message: 'Deleted'});
    });
  });
};


module.exports = todo;
